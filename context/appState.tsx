import React, { createContext, useState, useEffect } from 'react'

export const AppContext = createContext("")

const AppState = ({ children }: any) => {
  const [showLoading, setShowLoading] = useState<boolean>(false)
  const [userLocation, setUserLocation] = useState("TH")
  return (
    // @ts-ignore
    <AppContext.Provider value={{
      showLoading, setShowLoading,
      userLocation, setUserLocation,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppState