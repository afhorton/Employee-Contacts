function EmployeeView({ employeeData }) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-3">
          {employeeData.photo && (
            <div className="card h-100 border">
              <img
                className="card-img-top mx-auto d-block img-fluid h-100"
                src={employeeData.photo.src}
                alt={employeeData.photo.alt}
                size={employeeData.photo.size}
              />
            </div>
          )}
        </div>
        <div className="col-md-9">
          <div className="card h-100 border">
            <div className="card-body">
              <h4 className="card-title">{employeeData.name}</h4>
              <h5 className="card-subtitle mb-2 text-muted">
                {employeeData.position}
              </h5>
              <h5 className="card-subtitle mb-2 text-muted">
                {employeeData.department}
              </h5>
              <a className="card-link" href={"mailto:" + employeeData.email}>
                {employeeData.email}
              </a>
              <br />
              <a className="card-link" href={"tel:" + employeeData.phone_num}>
                {employeeData.phone_num}
              </a>
              <hr />
              <h5 className="card-title">Office Address</h5>
              <a
                className="card-link"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  employeeData.office_address.street +
                    ", " +
                    employeeData.office_address.city +
                    ", " +
                    employeeData.office_address.state
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {employeeData.office_address.street}
                <br />
                {employeeData.office_address.city},{" "}
                {employeeData.office_address.state}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
