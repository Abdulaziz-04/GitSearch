import React, { useContext } from 'react';
import AlertContext from './contextAPI/AlertcontextAPI/AlertContext';

//To display the whole alert!
const Alert = () => {
    const ac = useContext(AlertContext);
    const { alert, remAlert } = ac;
    return (
        alert !== null && (
            <div className={`alert alert-light`}>
                <i className='fas fa-exclamation-triangle' />
                {alert.msg}
                <button
                    onClick={remAlert}
                    className='btn btn-sm'
                    style={{ padding: '0 0 0 800px' }}
                >
                    <i className='fas fa-times-circle' />
                </button>
            </div>
        )
    );
};
export default Alert;

///fas fa-times-circle
