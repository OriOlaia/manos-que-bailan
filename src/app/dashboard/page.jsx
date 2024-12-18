"use client"

export default function DashboardPage() {
  return (
    <div>
      <h1>DASHBOARD</h1>
      <div className="row">
        <div className="col">
            <h2>Perfil</h2>
        </div>
        <div className="col">
            <h2>LECCIONES</h2>
            <ul>
              <li><a href="/dashboard/level1-basic">N1 - Basico</a></li>
              <li>N2 - proximamente</li>
              <li>N3 - proximamente</li>
              <li>...</li>
            </ul>
        </div>
      </div>
    </div>
  )
}