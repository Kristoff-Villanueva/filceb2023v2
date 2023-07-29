To learn:

1. How to connect backend to frontend
2. How to upload when a button or input is clicked

<label htmlFor="permitsUpload" className="block mb-2">
				DTI/SEC/BIR Registration/Business Permit/Cooperative Certification
				<span className="text-red-400">*</span>
			</label>
			<Controller
				name="permitsUpload"
				control={control}
				rules={{ required: true }}
				defaultValue=""
				render={({ field: { onChange, onBlur, name, ref } }) => (
					<input
						type="file"
						id="permitsUpload"
						accept=".jpg,.png,.jpeg"
						className="hidden"
						onChange={(e) => {
							handlePermitsUploadChange(e);
							onChange(e);
						}}
						onBlur={onBlur}
						name={name}
						ref={ref}
					/>
				)}
			/>
			<label
				htmlFor="permitsUpload"
				className={`px-4 py-2 mb-10 bg-blue-500 text-white rounded cursor-pointer inline-block ${
					permitsUploadFile ? "pointer-events-none bg-slate-500 opacity-50" : ""
				}`}
			>
				{permitsUploadFile ? "Uploaded" : "Choose File"}
			</label>
			{permitsUploadFile && (
				<span className="ms-2">{permitsUploadFile.name}</span>
			)}
