import { FC, FormEventHandler } from "react";
import styles from "./EditForm.module.scss";
import InputText from "../../../../components/forms/InputText/InputText";
import InputDate from "../../../../components/forms/InputDate/InputDate";
import DefaultButton from "../../../../components/buttons/DefaultButton/DefaultButton";
import InputPassword from "../../../../components/forms/InputPassword/InputPassword";

const EditForm: FC = () => {
	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		formData.forEach((value, key) => {
			console.log(`${key}: ${value}`);
		});
	};

	return (
		<form
			className={`${styles.form}`}
			onSubmit={handleSubmit}
		>
			<div className={`${styles.wrapper}`}>
				<div className={`${styles.left}`}>
					<InputText
						name="name"
						label="Your Name"
						placeholder="Charlene Reed"
					/>
					<InputText
						name="email"
						label="Email"
						placeholder="charlenereed@gmail.com "
					/>
					<InputDate
						name="date_of_birth"
						label="Date of Birth"
						placeholder="25 January 1990"
					/>
					<InputText
						name="permanent_address"
						label="Permanent Address"
						placeholder="San Jose, California, USA"
					/>
					<InputText
						name="postal_code"
						label="Postal Code"
						placeholder="45962"
					/>
				</div>
				<div className={`${styles.right}`}>
					<InputText
						name="username"
						label="User Name"
						placeholder="Charlene Reed "
					/>
					<InputPassword
						name="password"
						label="Password"
						placeholder="**********"
					/>
					<InputText
						name="present_address"
						label="Present Address"
						placeholder="San Jose, California, USA"
					/>
					<InputText
						name="city"
						label="City"
						placeholder="San Jose"
					/>
					<InputText
						name="country"
						label="Country"
						placeholder="USA"
					/>
				</div>
			</div>
			<DefaultButton
				className={`${styles.submit_btn}`}
				type="submit"
				variant="brand"
				radius="square"
				text="Save"
			/>
		</form>
	);
};

export default EditForm;
