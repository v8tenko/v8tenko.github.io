import React, {useEffect, useState} from 'react'
import HashLoader from "react-spinners/HashLoader";
import DataHelper from "../../utils/DataHelper";
import {isMobileOnly} from 'react-device-detect'


export default function FetchComponent({promise, url, name, children, isMobile}) {
  let [data, setData] = useState(null)

  useEffect(() => {
    if (url) {
      fetch(url)
        .then(res => res.json())
        .then(res => {
          DataHelper[name] = res
          setData(res)
        })
    } else {
      promise.then(setData)
    }

  }, [url, name, promise]);


  if (data || !(isMobile && isMobileOnly)) {
    return children
  }

  return <Loading/>
}

export const Loading = () => <div style={{
  height: '80vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}}>
  <HashLoader color="white" loading={true} size={150}/>
</div>
