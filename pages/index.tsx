import React, { ReactElement } from 'react'

const Home = () => {
  
  return (
    <div>index</div>
  )
}

Home.getLayout = function (page: ReactElement) {
  return <>{page}</>;
};
export default Home