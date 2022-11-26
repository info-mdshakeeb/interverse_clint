import React, { useContext } from 'react';
import { AuthUser } from '../Context/UserContext';
import AlartMessage from '../Hooks/AlartMessage';

const ReportModal = ({ reportModalData, setReportModalData }) => {
    const { user } = useContext(AuthUser)
    const { successMessage, errorMessage } = AlartMessage()
    const { sellerName, sellerEmail, dateAdded, productName, _id, photoUrl } = reportModalData
    console.log(reportModalData);
    const heandelReport = e => {
        e.preventDefault()
        const form = e.target;
        const reason = form.reason.value;
        const ReportData = {
            sellerName,
            sellerEmail,
            dateAdded,
            productName,
            productId: _id,
            productPic: photoUrl,
            reason,
        }
        fetch('http://localhost:2100/user/admin/report', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ReportData)
        }).then(rs => {
            successMessage(`${sellerName}-reported`)
            setReportModalData(null)
        }).catch(er => {
            errorMessage(er.name)
            setReportModalData(null)
        })
    }
    return (
        <div>
            <input type="checkbox" id="report_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        onClick={() => setReportModalData(null)}
                        htmlFor="report_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Hello {user.displayName}!</h3>
                    <p className="py-4">Place tell us reason <span className=' text-red-400'>Why you want to report
                    </span>
                    </p>
                    <form onSubmit={heandelReport} >
                        <div className="form-control">
                            <textarea
                                required
                                name='reason'
                                className="textarea textarea-bordered h-24" placeholder="Type here"></textarea>
                        </div>
                        <div className="w-full">
                            <button className="btn btn-primary btn-outline w-full mt-5">Submit Report</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReportModal;