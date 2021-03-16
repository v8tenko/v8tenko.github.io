import React, {useEffect, useState} from 'react'
import HashLoader from "react-spinners/HashLoader";
import DataHelper from "../../utils/DataHelper";


export default function FetchComponent({url, name, children}) {
  let [data, setData] = useState({})

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        DataHelper[name] = res
        setData(res)
      })
  }, [])


  if (data.length >= 0) {
      return children
  }
  return (
    <div style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <HashLoader color="white" loading={true} size={150} />
    </div>
  )


}
