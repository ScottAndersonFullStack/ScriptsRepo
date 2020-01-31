// TODO: CTRCA calls this code too, update prefix in EMSE:Variable Branch Prefix

//start replaced branch: ApplicationSubmitAfter

// DISABLED: ApplicationSubmitAfter:2
// var capAddressResult = aa.address.getAddressWithAttributeByCapId(capId);
// var fcapAddressObj = capAddressResult.getOutput();
// var addressAttrObj = fcapAddressObj[0].getAttributes().toArray();
// editAppSpecific('Public Owned',addressAttrObj[1].getB1AttributeValue());

if (!appMatch('Building/Temporary Construction/*/*')) {
	//replaced branch(ASA: NOC)
	include("SET_NOC");
}

aa.finance.reCalculateFees(capId, 'CONT', AInfo['Valuation']);

include("CREATE_PENDING_INSPECTIONS");

// DISABLED: ApplicationSubmitAfter:30
// if (!partialCap && appMatch('Building/Temporary Construction/Electrical/Show Power')) {
// 	br_nch('WUA: TempElec');
// 	}

// DISABLED: ApplicationSubmitAfter:31
// if (appMatch('Building/Pool Construction/Building/*') && AInfo['Work Type'] != 'Accessible Lift' && AInfo['Work Type'] != 'Resurfacing') {
// 	br_nch('ASA: PlumbingInsp4');
// 	}

// DISABLED: ApplicationSubmitAfter:33
// if (!cap.isCreatedByACA() && AInfo['Code Year'] == '2015') {
// 	editAppSpecific('Code Year', '2015');
// 	}

// DISABLED: ApplicationSubmitAfter:34
// if (publicUser) {
// 	editAppSpecific('Code Year', '2015');
// 	}

if (AInfo['Master Building Permit Number'] != null && AInfo['Master Building Permit Number'] != '') {
	addParent(AInfo['Master Building Permit Number']);
}


// DISABLED: ApplicationSubmitAfter:46
// if (appMatch('Fire/Facility Construction/Pyrotechnic/NA') && balanceDue == 0) {
// 	fire_Pyro();
// 	}

include("SET_EXPIRATION_DATE");

//end replaced branch: ApplicationSubmitAfter;
// DISABLED: ConvertToRealCAPAfter:2
// if (publicUser) {
// 	editAppSpecific('Code Year', '2015');
// 	}
