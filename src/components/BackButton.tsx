import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
interface BackButtonProps {
  size: string | number;
}
const BackButton = (props: BackButtonProps) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.back();
      }}
    >
      <FontAwesomeIcon
        icon={faCircleArrowLeft}
        height={props.size}
        color={'#325288'}
      />
    </button>
  );
};
export default BackButton;
