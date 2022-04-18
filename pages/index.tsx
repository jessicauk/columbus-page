import Head from "next/head";
import ColumnChart from "../components/columnchart/columnchart";
import DonutChart from "../components/donutchart/donutchart";
import {
  faEllipsis,
  faAngleLeft,
  faSquarePlus,
  faBagShopping,
  faUser,
  faGear,
  faThLarge,
  faPlusSquare,
  faAngleDown,
  faPlus,
  faMinus,
  faForwardFast,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Index() {
  return (
    <>
      <Head>
        <title>Columbus page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Piazzolla:wght@100;200;300;400;500;600;700;800;900"
          rel="stylesheet"
        />
      </Head>
      <div className="app">
        <div className="container">
          <nav className="header">
            <div className="header__left">
              <h1 className="header__navigation headline1">
                Principal<span>Mi inversión</span>
              </h1>
            </div>
            <div className="header__right">
              <p className="header__date">Martes, 13 de Julio de 2021</p>
              <div className="header__group">
                <div className="header__notifications">
                  <div className="circle" />
                  <FontAwesomeIcon icon={faBell} />
                </div>
                <div className="header__avatar">JD</div>
              </div>
            </div>
          </nav>
          <div className="sidebar">
            <img src="" alt="" />
            <ul className="sidebar__list">
              <li>
                <FontAwesomeIcon icon={faThLarge} />
              </li>
              <li>
                <FontAwesomeIcon icon={faSquarePlus} />
              </li>
              <li>
                <FontAwesomeIcon icon={faBagShopping} />
              </li>
              <li>
                <FontAwesomeIcon icon={faUser} />
              </li>
              <li>
                <FontAwesomeIcon icon={faGear} />
              </li>
            </ul>
          </div>
          <div className="main">
            <section className="buttons__left">
              <button className="button button--tertiary">
                <FontAwesomeIcon icon={faAngleLeft} />
                Regresar
              </button>
            </section>
            <section className="buttons__right">
              <button className="button button--secondary">
                Solicitar Retiro
              </button>
              <button className="button">Realizar Aportación</button>
            </section>
            <section className="wrapper">
              <h1 className="headline2">Saldo en cuenta</h1>
              <div className="card balance">
                <div className="balance__header">
                  {/* <img src="" alt="" /> */}
                  <div className="icon--rounded background--blue">
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  <div className="balance__account">
                    <h2 className="headline3">Cuenta principal</h2>
                    <p>
                      No. Cuenta<span>123456</span>
                    </p>
                  </div>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
                <div className="balance__detail">
                  <div className="balance__item">
                    <div className="balance__type headline4">Valor total</div>
                    <div className="balance__value headline5">
                      $123,456.00 MXN
                    </div>
                  </div>
                  <div className="balance__item">
                    <div className="balance__type headline4">
                      Tipo de ahorro
                    </div>
                    <div className="balance__value text-light">Mensual</div>
                  </div>
                  <div className="balance__item">
                    <div className="balance__type headline4">Aportación</div>
                    <div className="balance__value text-light">$1,456.00 MXN</div>
                  </div>
                  <div className="balance__item">
                    <div className="balance__type headline4">Nombre</div>
                    <div className="balance__value text-light">Joseph Antonie D.</div>
                  </div>
                  <div className="balance__item">
                    <div className="balance__type headline4">No Cuenta</div>
                    <div className="balance__value text-light">
                      1234567890123456789
                    </div>
                  </div>
                  <div className="balance__item">
                    <div className="balance__type headline4">placeholder</div>
                    <div className="balance__value text">placeholder</div>
                  </div>
                </div>
              </div>
            </section>
            <section className="wrapper">
              <h1 className="headline2">Mis rendimientos</h1>
              <div className="card performance">
                <div className="performance__chart">
                  <h2 className="headline3">Últimos seis meses</h2>
                  {/* <ColumnChart /> */}
                </div>
                <div className="performance__amount">
                  <div>
                    <h3 className="headline4">Rendimiento acumulado %</h3>
                    <p className="text">+4.6%</p>
                  </div>
                  <div>
                    <h3 className="headline4">Rendimiento acumulado $</h3>
                    <p className="text">$123.00 MNX</p>
                  </div>
                </div>
                <p className="caption">
                  Rendimientos acumulados de los últimos seis meses, por
                  concepto de tus aportaciones acumuladas en tu cuenta de
                  inversión
                </p>
              </div>
            </section>
            <section className="wrapper">
              <h1 className="headline2">Mis movimientos</h1>
              <div className="card transactions">
                <div className="transactions__header">
                  <div>
                    <p className="small">Movimientos</p>
                    <p>
                      <span>Todos los movimientos</span>
                      <FontAwesomeIcon icon={faAngleDown} />
                    </p>
                  </div>
                  <div>
                    <p className="small">Periodo</p>
                    <p>
                      <span>Últimos movimientos</span>
                      <FontAwesomeIcon icon={faAngleDown} />
                    </p>
                  </div>
                </div>
                <div className="transactions__list">
                  <div className="transactions__item">
                    <button className="icon--rounded icon--minus">
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <p className="text">Retiro</p>
                    <p className="small">Martes, 13 de Julio de 2021</p>
                    <p className="icon--minus">-$150</p>
                  </div>
                  <div className="transactions__item">
                    <button className="icon--rounded icon--plus">
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <p className="text">Depósito</p>
                    <p className="small">Martes, 13 de Julio de 2021</p>
                    <p className="icon--plus">+$54</p>
                  </div>
                  <div className="transactions__item">
                    <button className="icon--rounded icon--transfer">
                      <FontAwesomeIcon icon={faForwardFast} />
                    </button>
                    <p className="text">Transpaso</p>
                    <p className="small">Martes, 13 de Julio de 2021</p>
                    <p className="icon--transfer">$120</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="wrapper">
              <h1 className="headline2">Mi posición</h1>
              <div className="card position">
                <div className="position__donutchart">
                  <h2 className="headline3">No. Cuenta 123456</h2>
                  {/* <DonutChart /> */}
                  <div>
                    <p className="headline4">Valor total:</p>
                    <p>$1,456.00 MXN</p>
                  </div>
                </div>
                <div className="position__progressbar">
                  <div className="progressbar__item">
                  <div className="circle" />
                    <p className="text">
                      Balanceado Pesos Inicial (MXN) 
                    </p>
                    <span className="text">6%</span>
                    <p className="small">$3,456.00 MXN</p>
                    <div className="progressbar__container">
                      <div className="progressbar__bar one-percent" />
                    </div>
                  </div>
                  <div className="progressbar__item">
                    <div className="circle" />
                    <p className="text">
                      Balanceado Dólares Inicial (USD)
                    </p>
                    <span className="text">22%</span>
                    <p className="small">$12,345.67 MXN (234,56 USD)</p>
                    <div className="progressbar__container">
                      <div className="progressbar__bar three-percent" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="wrapper__info">
              <div className="actions">
                <h1 className="headline2">Solicitudes</h1>
                <ul className="card actions__list">
                  <li className="actions__item">    
                    <div className="icon--rounded background--blue">
                      <FontAwesomeIcon icon={faForwardFast} />
                    </div>
                    <div className="actions__title">
                      <p className="text">Solicitar transpasos</p>
                      <p className="small">Traspasa fondos entre alternativas de inversión</p>
                    </div> 
                  </li>
                  <li className="actions__item">    
                  <div className="icon--rounded background--blue">
                      <FontAwesomeIcon icon={faForwardFast} />
                    </div>
                    <div className="actions__title">
                      <p className="text">Solicitar retiros</p>
                      <p className="small">Programa retiros totales o parciales</p>
                    </div> 
                  </li>
                  <li className="actions__item">    
                  <div className="icon--rounded background--blue">
                      <FontAwesomeIcon icon={faForwardFast} />
                    </div>
                    <div className="actions__title">
                      <p className="text">Realiza aportaciones</p>
                      <p className="small">Programa depósitos o aportaciones recurrentes</p>
                    </div> 
                  </li>
                </ul>
              </div>
              <div className="actions">
                <h1 className="headline2">Consultas</h1>
                <ul className="card actions__list">
                  <li className="actions__item">    
                    <div className="icon--rounded background--blue">
                      <FontAwesomeIcon icon={faForwardFast} />
                    </div>
                    <div className="actions__title">
                      <p className="text">Solicitudes endientes</p>
                      <p className="small">Consulta los movimientos Pendientes</p>
                    </div> 
                  </li>
                  <li className="actions__item">    
                  <div className="icon--rounded background--blue">
                      <FontAwesomeIcon icon={faForwardFast} />
                    </div>
                    <div className="actions__title">
                      <p className="text">Aclaraciones</p>
                      <p className="small">Tienes aclaraciones sin resolver, consulta</p>
                    </div> 
                  </li>
                  <li className="actions__item">    
                  <div className="icon--rounded background--blue">
                      <FontAwesomeIcon icon={faForwardFast} />
                    </div>
                    <div className="actions__title">
                      <p className="text">Detalles de mi Póliza</p>
                      <p className="small">Consulta los detalles y documentos de tu póliza</p>
                    </div> 
                  </li>
                </ul>
              </div>
              <div className="actions">
                <h1 className="headline2">Información</h1>
                <ul className="card actions__list">
                  <li className="actions__item">    
                  <div className="icon--rounded background--blue">
                      <FontAwesomeIcon icon={faForwardFast} />
                    </div>
                    <div className="actions__title">
                      <p className="text">Portal</p>
                      <p className="small">Accede al portal desde tu navegador web</p>
                    </div> 
                  </li>
                  <li className="actions__item">    
                  <div className="icon--rounded background--blue">
                      <FontAwesomeIcon icon={faForwardFast} />
                    </div>
                    <div className="actions__title">
                      <p className="text">Beneficiarios</p>
                      <p className="small">Consulta la lista de beneficiarios registrados</p>
                    </div> 
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
