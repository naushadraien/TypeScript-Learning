

const Parent = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="flex justify-center items-center flex-col my-2">
        <h1>This is Parent Component</h1>
        <p>{children}</p>
    </div>
  )
}

export default Parent