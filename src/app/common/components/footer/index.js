import { memo } from 'react';
import moment from 'moment';

const year = moment().year();

export const Footer = props => (
    <footer>
        <section className="footer-section">
            <span>(*All numbers are projections only)</span> &copy; {`${year}`}  &nbsp; Profit Acceleration Software&trade;
        </section>
        <section className="version">
            {`version: ${props.version}`}
        </section>
    </footer>
);

export default memo(Footer);