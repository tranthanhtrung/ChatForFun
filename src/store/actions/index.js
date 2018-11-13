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

export const creatDataChat = (Au, Data) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		var Content = Data.Content
		firestore.collection("Chat").add({
			Content,
		}).then(() => {
			dispatch({ type: 'CREAT_DATA_CHAT', Data });
		}).catch((err) => {
			dispatch({ type: 'CREAT_DATA_ERR', err})
		})
	}
};