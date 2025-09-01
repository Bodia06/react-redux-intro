import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import styles from './UserCard.module.css'
import { reselectFavourite } from '../../store/slices/userSlices'

function UserCard({ userInfo, setValueIsFavourite }) {
	const { firstName, lastName, email, isFavourite } = userInfo

	const stylesUserCardWrapper = classNames(styles.userCardWrapper, {
		[styles.active]: isFavourite,
		[styles.unactive]: !isFavourite,
	})

	const reselectFavouriteHandler = () => {
		setValueIsFavourite(!isFavourite)
	}

	return (
		<div className={styles.userCardContainer}>
			<button
				onClick={reselectFavouriteHandler}
				className={stylesUserCardWrapper}
			>
				<h1
					className={styles.userCardFullName}
				>{`${firstName} ${lastName}`}</h1>
				<p className={styles.userCardText}>{email}</p>
			</button>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		userInfo: state.userInfo,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setValueIsFavourite: (value) => dispatch(reselectFavourite(value)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(UserCard)
