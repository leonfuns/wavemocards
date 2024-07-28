import React, { useState, useEffect } from "react";
import axios from "axios";

function Connect({ URL, children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const response = await axios.get(URL, {
          cancelToken: source.token
        });
        // 確保數據總是以數組形式返回
        setData(Array.isArray(response.data) ? response.data : Object.values(response.data));
      } catch (error) {
        if (axios.isCancel(error)) {
          // console.log('請求已取消:', error.message);
        } else {
          setError(`錯誤：${error.response?.data?.message || error.message}. 請稍後再試。`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      source.cancel('組件已卸載');
    };
  }, [URL]);

  if (loading) return <div>載入中...</div>;
  if (error) return <div>{error}</div>;
  return children(data);
}

export default Connect;