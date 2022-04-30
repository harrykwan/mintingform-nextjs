export default function TopBar() {
  return (
    <div>
      <nav
        className="navbar nav-dark mb-4 shadow p-3 mb-5 "
        style={{
          backgroundColor: '#E06060',
        }}
      >
        <a className="navbar-brand p-5" href="#">
          <img src="img/white-logo-with-label.webp" width={200} alt="" />
        </a>
      </nav>
    </div>
  )
}
