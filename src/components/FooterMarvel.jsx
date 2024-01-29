export const FooterMarvel = () => {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-body-secondary">
            &copy; 2024 Santiago Reyes, Inc
          </p>
          <a
            href="/"
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FF3D00"
                d="M41,26.5C41,35.6,33.6,43,24.5,43c-2.4,0-4.6-0.5-6.6-1.4l1.3-2.7c1.6,0.7,3.5,1.1,5.4,1.1C31.9,40,38,33.9,38,26.5c0-4.2-2-8-5-10.5v11.1l-5-5V15l-5.6,12H28v-2l5,5l-5,4v-2h-7.9L15,43H9l15-30c-7.2,0.3-13,6.2-13,13.5c0,2,0.4,3.9,1.2,5.6l-1.6,3.3C9,32.8,8,29.8,8,26.5C8,17.4,15.4,10,24.5,10c0.3,0,0.7,0,1,0L28,5h5v7.4C37.8,15.3,41,20.5,41,26.5z M28.7,36H33v-3.4L28.7,36z"
              ></path>
            </svg>
          </a>
          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-body-secondary">
                Marvel Universo
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};
