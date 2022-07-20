/* This Source Code Form is subject to the terms of the Mozilla Public
  * License, v. 2.0. If a copy of the MPL was not distributed with this
  * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
import * as React from 'react';
import { Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import EditMeterModalComponent from './EditMeterModalComponent';
import '../../styles/unit-card-page.css';
import { useState } from 'react';
import { MeterData } from 'types/redux/meters';

interface MeterViewComponentProps {
	meter: MeterData;
}

export default function MeterViewComponent(props: MeterViewComponentProps) {
	// Don't check if admin since only an admin is allow to route to this page.
	// Edit Modal Show
	const [showEditModal, setShowEditModal] = useState(false);
	const handleShow = () => {
		setShowEditModal(true);
	}
	const handleClose = () => {
		setShowEditModal(false);
	}

	return (
		<div className="card">
			<div className="identifier-container">
				{props.meter.identifier}
			</div>
			<div className="meter-container">
				<b><FormattedMessage id="meter.name" /></b> {props.meter.name}
			</div>
			<div className="meter-container">
				<b><FormattedMessage id="meter.enabled" /></b> {props.meter.enabled}
			</div>
			<div className="meter-container">
				<b><FormattedMessage id="meter.displayable" /></b> {props.meter.displayable}
			</div>
			<div className="edit-btn">
				<Button variant="Secondary" onClick={handleShow}>
					<FormattedMessage id="edit.meter" />
				</Button>
				{/* Creates a child MeterModalEditComponent */}
				<EditMeterModalComponent show={showEditModal} meter={props.meter} handleClose={handleClose} />
			</div>
		</div>
	);
}