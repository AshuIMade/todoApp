
function HeaderSub({title,image,children}) {
  return (
    <header className="headerSub">
      <div className="headerSub_container">
        <div className="headerSub_container-bg">
          <img src={image} alt="Header Background Image" />
        </div>
        <div className="headerSub_content">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </header>
  )
}

export default HeaderSub