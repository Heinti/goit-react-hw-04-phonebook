import PropTypes from 'prop-types';
// import css from '../ContactList/ContactList.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ data, onDelete }) => {
  return (
    <section>
      <ul>
        {data.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            data={{ id, name, number }}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </section>
  );
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
