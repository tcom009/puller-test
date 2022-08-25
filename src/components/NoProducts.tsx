import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStoreSlash } from '@fortawesome/free-solid-svg-icons';
const NoProducts = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        height: '10%',
        margin: '10%',
        fontSize: '20px',
        textAlign: 'center',
        color: '#77706C',
      }}
    >
      <div>
        <FontAwesomeIcon icon={faStoreSlash} height='150' color='#77706C' />
      </div>
      Sorry there are not matching products.
    </div>
  );
};

export default NoProducts;
