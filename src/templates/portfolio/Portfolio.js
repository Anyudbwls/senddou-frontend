import React from 'react';

function Portfolio({ data }) {
  return (
    <div className="h-full border-black justify-center align-middle">
      <div>[Portfolio]</div>
      <div>title: {data}</div>
    </div>
  );
}

Portfolio.defaultProps = {
  data: '기본 제목',
};

export default Portfolio;
