import React from 'react';

function Default({ data }) {
  return (
    <div className="h-full border-black justify-center align-middle">
      <div>[Default]</div>
      <div>title: {data}</div>
    </div>
  );
}

Default.defaultProps = {
  data: '기본 제목',
};

export default Default;
