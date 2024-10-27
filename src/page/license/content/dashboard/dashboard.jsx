import React from 'react';
import './index.css';
import { data } from './data';

export function DashboardPage() {
  // Kiểm tra nếu tất cả các phần content đều trống
  const hasContent = data.some(item => item.content); // Kiểm tra xem có ít nhất một phần content không rỗng

  return (
    <div className='container pt-5'>
      <h3 style={{ fontWeight: '600' }}>Bảng điều khiển</h3>
      <div className="table-responsive mt-4">
        <table className="table table-bordered text-center">
          <thead className="table-white">
            <tr>
              {data.map((item, index) => (
                <th key={index} scope="col" className="text-start">{item.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {hasContent ? ( 
                data.map((item, index) => (
                  <td key={index} className='text-start'>{item.content}</td>
                ))
              ) : (
                <td colSpan={data.length} className='text-center'>No Data</td> // Hiển thị "No Data" nếu không có content
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
