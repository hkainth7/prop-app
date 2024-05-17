"use client";

import { TextField } from "mui-rff";
import { Form } from "react-final-form";

interface FormValues {
	name: string;
	email: string;
	reason: string;
	unit: string;
	description: string;
	images: File[];
}

const initialValues: FormValues = {
	name: "",
	email: "",
	reason: "",
	unit: "",
	description: "",
	images: [],
};

export default function Home() {
	const onSubmit = () => {};

	return (
		<main>
			<Form onSubmit={onSubmit} initialValues={initialValues}>
				{(props) => (
					<form onSubmit={props.handleSubmit}>
						<TextField name="name" />
					</form>
				)}
			</Form>
		</main>
	);
}
