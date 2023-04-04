import kisiler from './veri';
import Kisi from './Kisi';

function KisiListe() {
  return (
    <>
      <div className="row">
        {kisiler.map((kisi, index) => {
          return <Kisi veri={kisi} key={index} />;
        })}
      </div>
    </>
  );
}

export default KisiListe;
