import React from 'react';

function Certificate({ data }) {
  return (
    <div className="h-full border-black justify-center align-middle">
      <div>[Certificate]</div>
      <div>title: {data}</div>
    </div>
  );
}

Certificate.defaultProps = {
  data: '기본 제목',
};

export default Certificate;
