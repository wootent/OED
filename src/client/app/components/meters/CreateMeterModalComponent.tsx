/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */
import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Input } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import translate from '../../utils/translate';
import '../../styles/Modal.unit.css';
import { MeterType } from '../../types/redux/meters';
import { useDispatch } from 'react-redux';
import { addMeter } from '../../actions/meters';
import { useState } from 'react';
import { TrueFalseType } from '../../types/items';

export default function CreateMeterModalComponent() {

	const dispatch = useDispatch();

	const defaultValues = {
		identifier : '',
		name : '',
		area : 0,
		enabled : true,
		displayable : true,
		meterType : '',
		url : '',
		timezone : '',
		gps : '',
		unitId : 0,
		defaultGraphicUnit : 0,
		note : '',
		cumulative : '',
		cumulativeReset : '',
		cumulativeResetStart : '',
		cumulativeResetEnd : '',
		endOnlyTime : '',
		reading : 0,
		readingGap : '',
		readingVariation : 0,
		readingDuplication : 0,
		timeSort : '',
		startTimestamp : '',
		endTimestamp : ''
	}

	/* State */
	// We can definitely sacrifice readability here (and in the render) to consolidate these into a single function if need be
	// NOTE a lot of this is copied from the MeterModalEditComponent, in the future we could make a single component to handle all edit pages if need be
	// TODO Katherine with Delaney help are going to try to consolidate to create reusable functions.

	// Modal show
	const [showModal, setShowModal] = useState(false);
	const handleClose = () => {
		setShowModal(false);
		resetState();
	};
	const handleShow = () => setShowModal(true);

	// identifier
	const [identifier, setIdentifier] = useState(defaultValues.identifier);
	const handleIdentifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIdentifier(e.target.value);
	}

	// name
	const [name, setName] = useState(defaultValues.name);
	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	}

	// area
	const [area, setArea] = useState(defaultValues.area);
	const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setArea(Number(e.target.value));
	}

	// enabled
	const [enabled, setEnabled] = useState(defaultValues.enabled);
	const handleEnabledChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEnabled(JSON.parse(e.target.value));
	}

	// displayable
	const [displayable, setDisplayable] = useState(defaultValues.displayable);
	const handleDisplayableChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDisplayable(JSON.parse(e.target.value));
	}

	// meterType
	const [meterType, setMeterType] = useState(defaultValues.meterType? `${defaultValues.meterType}` : '');
	const handleMeterTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMeterType(e.target.value);
	}

	// URL
	const [url, setUrl] = useState(defaultValues.url? `${defaultValues.url}` : '');
	const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUrl(e.target.value);
	}

	// timezone
	const [timezone, setTimezone] = useState(defaultValues.timezone? `${defaultValues.timezone}` : '');
	const handleTimezoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTimezone(e.target.value);
	}

	// GPS
	const [gps, setGps] = useState(defaultValues.gps? `${defaultValues.gps.latitude},${defaultValues.gps.longitude}` : '');
	const handleGpsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setGps(e.target.value);
	}

	// unitID
	const [unitId, setUnitID] = useState(defaultValues.unitId);
	const handleUnitIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUnitID(Number(e.target.value));
	}

	// defaultGraphicUnit
	const [defaultGraphicUnit, setDefaultGraphicUnit] = useState(defaultValues.defaultGraphicUnit);
	const handleDefaultGraphicUnitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDefaultGraphicUnit(Number(e.target.value));
	}

	// note
	const [note, setNote] = useState(defaultValues.note);
	const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNote(e.target.value);
	}

	// cumulative
	const [cumulative, setCumulative] = useState(defaultValues.cumulative);
	const handleCumulativeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCumulative(JSON.parse(e.target.value));
	}

	// cumulativeReset
	const [cumulativeReset, setCumulativeReset] = useState(defaultValues.cumulativeReset);
	const handleCumulativeResetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCumulativeReset(JSON.parse(e.target.value));
	}

	// cumulativeResetStart
	const [cumulativeResetStart, setCumulativeResetStart] = useState(defaultValues.cumulativeResetStart);
	const handleCumulativeResetStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCumulativeResetStart(e.target.value);
	}

	// cumulativeResetEnd
	const [cumulativeResetEnd, setCumulativeResetEnd] = useState(defaultValues.cumulativeResetEnd);
	const handleCumulativeResetEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCumulativeResetEnd(e.target.value);
	}

	// endOnlyTime
	const [endOnlyTime, setEndOnlyTime] = useState(defaultValues.endOnlyTime);
	const handleEndOnlyTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEndOnlyTime(JSON.parse(e.target.value));
	}

	// reading
	const [reading, setReading] = useState(defaultValues.reading);
	const handleReadingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setReading(Number(e.target.value));
	}

	// readingGap
	const [readingGap, setReadingGap] = useState(defaultValues.readingGap);
	const handleReadingGapChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setReadingGap(e.target.value);
	}

	// readingVariation
	const [readingVariation, setReadingVariation] = useState(defaultValues.readingVariation);
	const handleReadingVariationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setReadingVariation(Number(e.target.value));
	}

	// readingDuplication
	const [readingDuplication, setReadingDuplication] = useState(defaultValues.readingDuplication);
	const handleReadingDuplicationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setReadingDuplication(Number(e.target.value));
	}

	// timeSort
	const [timeSort, setTimeSort] = useState(defaultValues.timeSort);
	const handleTimeSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTimeSort(JSON.parse(e.target.value));
	}

	// startTimestamp
	const [startTimestamp, setStartTimestamp] = useState(defaultValues.startTimestamp);
	const handleStartTimestampChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setStartTimestamp(e.target.value);
	}

	// endTimestamp
	const [endTimestamp, setEndTimestamp] = useState(defaultValues.endTimestamp);
	const handleEndTimestampChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEndTimestamp(e.target.value);
	}


	/* End State */

	// Reset the state to default values
	// This would also benefit from a single state changing function for all state
	const resetState = () => {
		setName(defaultValues.name);
		setIdentifier(defaultValues.identifier);
	}

	// Unlike edit, we decided to discard and inputs when you choose to leave the page. The reasoning is
	// that create starts from an empty template.

	// Submit
	const handleSubmit = () => {

		// Close modal first to avoid repeat clicks
		setShowModal(false);

		// New Meter object, overwrite all unchanged props with state
		const newMeter = {
			...defaultValues,
			identifier,
			name,
			area,
			enabled,
			displayable,
			meterType,
			url,
			timezone,
			gps,
			unitId,
			defaultGraphicUnit,
			note,
			cumulative,
			cumulativeReset,
			cumulativeResetStart,
			cumulativeResetEnd,
			endOnlyTime,
			reading,
			readingGap,
			readingVariation,
			readingDuplication,
			timeSort,
			startTimestamp,
			endTimestamp

		}

		// Set default identifier as name if left blank
		newMeter.identifier = (!newMeter.identifier || newMeter.identifier.length === 0) ? newMeter.name : newMeter.identifier;


		// Add the new Meter and update the store
		dispatch(addMeter(newMeter));

		resetState();
	};

	return (
		<>
			{/* Show modal button */}
			<Button variant="Secondary" onClick={handleShow}>
				<FormattedMessage id="create.Meter" />
			</Button>

			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title> <FormattedMessage id="create.Meter" /></Modal.Title>
				</Modal.Header>
				{/* when any of the Meter are changed call one of the functions. */}
				<Modal.Body className="show-grid">
				</Modal.Body>
				<Modal.Footer>
					{/* Hides the modal */}
					<Button variant="secondary" onClick={handleClose}>
						<FormattedMessage id="discard.changes" />
					</Button>
					{/* On click calls the function handleSaveChanges in this component */}
					<Button variant="primary" onClick={handleSubmit} disabled={!name}>
						<FormattedMessage id="save.all" />
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}