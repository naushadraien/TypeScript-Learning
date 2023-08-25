

const Parent = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
        <h1>This is Parent Component</h1>
        <p>{children}</p>
    </div>
  )
}

export default Parent