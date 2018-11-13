export const creatDataFriend = (Data) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		firestore.collection('Friends').add({
			Data,
		}).then(() => {
			dispatch({ type: 'CREAT_DATA', Data });
		}).catch((err) => {
			dispatch({ type: 'CREAT_DATA_ERR', err})
		})
	}
};
