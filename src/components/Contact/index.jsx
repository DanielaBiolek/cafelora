import './index.css';

export const Contact = () => {     
     return (
      <section id="contact">
          <div className="container">
            <h2>Kde nás najdete</h2>
            <div className="contact">
              <div className="contact__address">
                Na Mýtě 240 <br />
                514 03 Byšky nad Jizerou <br />
                Tel: +420 775 334 427
              </div>
              <table className="contact__hours">
                <tr><td>Pondělí</td><td>ZAVŘENO</td></tr>
                <tr><td>Úterý</td><td>11:00 - 22:00</td></tr>
                <tr><td>Středa</td><td>11:00 - 22:00</td></tr>
                <tr><td>Čtvrtek</td><td>11:00 - 22:00</td></tr>
                <tr><td>Sobota</td><td>9:00 - 02:00</td></tr>
                <tr><td>Neděle</td><td>9:00 - 02:00</td></tr>
              </table>
              <iframe src="https://mapy.cz/s/paloregama" width="100%" height="600" frameBorder="0" title="Café Lóra na mapě."></iframe>
            </div>
          </div>
        </section>)
        }