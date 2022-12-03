import React from 'react';

function Title({ data }) {
  return (
    <div className="h-full border-t-4 border-black justify-center align-middle">
      <div>[title]</div>
      <div>{data}</div>
    </div>
  );
}

Title.defaultProps = {
  data: '기본 제목',
};

export default Title;
