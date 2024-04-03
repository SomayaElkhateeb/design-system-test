import { useState, useEffect } from 'react';
import { capitalizeFirstLetter } from 'src/app/utils';
import { LiaSearchSolid } from 'react-icons/lia';
import { Button, CheckBox, InputRow, SelectItem } from '..';

const SelectItems = ({ title, onClose, select, varient }) => {
	const [state, setState] = useState({
		searchQuery: '',
		selectedItems: [],
		totalItems: select,
		isChecked: true,
	});

	const { searchQuery, selectedItems, totalItems, isChecked } = state;

	useEffect(() => {
		setState((prevState) => ({
			...prevState,
			totalItems: select,
		}));
	}, [select]);

	useEffect(() => {
		const filteredItems = select?.filter((item) => {
			if ('title' in item) {
				return item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase());
			}
			if ('fName' in item || 'lName' in item) {
				return (
					(item.fName && item.fName.toLowerCase().includes(searchQuery.toLowerCase())) ||
					(item.lName && item.lName.toLowerCase().includes(searchQuery.toLowerCase()))
				);
			}
			return false;
		});

		const updatedSelectedItems = totalItems.filter((item) => selectedItems.includes(item.id));

		setState((prevState) => ({
			...prevState,
			queryItems: filteredItems,
			selectedItems: updatedSelectedItems,
		}));
	}, [searchQuery, select]);

	const handleChangeBox = (isChecked) => {
		setState((prevState) => ({
			...prevState,
			isChecked,
		}));
	};

	const handleCheckBoxChange = (isChecked, itemId) => {
		const updatedItems = isChecked ? [...selectedItems, itemId] : selectedItems.filter((item) => item !== itemId);
		setState((prevState) => ({
			...prevState,
			selectedItems: updatedItems,
		}));
	};

	const handleAddButtonClick = () => {
		const itemsData = totalItems
			.filter((item) => selectedItems.includes(item.id))
			.map((item) => {
				return {
					id: item.id,
					image: item.img,
					title: item.title,
					subTitle: item.subTitle,
					fName: item.fName,
					lName: item.lName,
					count: item.count,
				};
			});
		localStorage.setItem('selectedItemsData', JSON.stringify(itemsData));
		onClose();
	};

	const handleClickOutside = (event) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	};

	return (
		<div
			className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50'
			onClick={handleClickOutside}
		>
			<div className='w-[637px] rounded bg-white py-[18px]'>
				<div>
					<h3 className='text-title font-semibold mb-3 ml-[18px]'>{capitalizeFirstLetter(title)}</h3>

					<div className='flex items-center justify-between px-[18px]'>
						<div className='w-[380px]'>
							<InputRow
								leftIcon={<LiaSearchSolid />}
								placeholder='Search'
								value={searchQuery}
								handleOnChange={(query) =>
									setState({
										...state,
										searchQuery: query,
									})
								}
							/>
						</div>

						<p>
							{selectedItems.length} categories out of {totalItems.length}
						</p>

						{selectedItems.length === 0 && (
							<CheckBox variant='minus' checked={!isChecked} handleOnChange={handleChangeBox} />
						)}
						{selectedItems.length > 0 && selectedItems.length < totalItems.length && (
							<CheckBox checked={isChecked} variant='minus' handleOnChange={handleChangeBox} />
						)}
						{selectedItems.length === totalItems.length && (
							<CheckBox checked={isChecked} handleOnChange={handleChangeBox} />
						)}
					</div>
				</div>

				<div className='flex flex-col gap-2 my-2 h-[400px] overflow-auto'>
					{queryItems.map((item) => (
						<SelectItem
							varient={varient}
							key={item.id}
							{...item}
							isChecked={selectedItems.includes(item.id)}
							onCheckBoxChange={(isChecked) => handleCheckBoxChange(isChecked, item.id)}
						/>
					))}
				</div>

				<div className='flex mt-4 justify-end mr-[18px] gap-[18px]'>
					<Button onClick={() => onClose()} variant='ter'>
						cancel
					</Button>
					<Button onClick={handleAddButtonClick}>{`add (${selectedItems.length})`}</Button>
				</div>
			</div>
		</div>
	);
};

export default SelectItems;

// import { useState, useEffect } from "react";
// import { capitalizeFirstLetter } from "src/app/utils";
// import { LiaSearchSolid } from "react-icons/lia";
// import { Button, CheckBox, InputRow, SelectItem } from "..";

// const SelectItems = ({ title, onClose, select, varient }) => {
//   const [state, setState] = useState({
//     searchQuery: "",
//     selectedItems: [], // select items
//     queryItems: [], // search
//     totalItems: select,
//     isChecked: true,
//   });

//   const { searchQuery, selectedItems, totalItems, isChecked, queryItems } =
//     state;

//   useEffect(() => {
//     setState((prevState) => ({
//       ...prevState,
//       totalItems: select,
//     }));
//   }, [select]);

//   useEffect(() => {
//     const filteredItems = select?.filter((item) => {
//       if ("title" in item) {
//         return (
//           item.title &&
//           item.title.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//       }
//       if ("fName" in item || "lName" in item) {
//         return (
//           (item.fName &&
//             item.fName.toLowerCase().includes(searchQuery.toLowerCase())) ||
//           (item.lName &&
//             item.lName.toLowerCase().includes(searchQuery.toLowerCase()))
//         );
//       }
//       return false;
//     });

//     const updatedSelectedItems = totalItems.filter((item) =>
//       selectedItems.includes(item.id)
//     );

//     setState((prevState) => ({
//       ...prevState,
//       queryItems: filteredItems,
//       selectedItems: updatedSelectedItems,
//     }));
//   }, [searchQuery, select]);

//   const handleChangeBox = (isChecked) => {
//     setState((prevState) => ({
//       ...prevState,
//       isChecked,
//     }));
//   };

//   const handleCheckBoxChange = (isChecked, itemId) => {
//     const updatedItems = isChecked
//       ? [...selectedItems, itemId]
//       : selectedItems.filter((item) => item !== itemId);
//     setState((prevState) => ({
//       ...prevState,
//       selectedItems: updatedItems,
//     }));
//   };

//   const handleAddButtonClick = () => {
//     const itemsData = totalItems
//       .filter((item) => selectedItems.includes(item.id))
//       .map((item) => {
//         return {
//           id: item.id,
//           image: item.img,
//           title: item.title,
//           subTitle: item.subTitle,
//           fName: item.fName,
//           lName: item.lName,
//           count: item.count,
//         };
//       });
//     console.log("selectedItems", selectedItems);
//     // specific category

//     localStorage.setItem("selectedItems", JSON.stringify(itemsData));

//     onClose();
//   };

//   const handleClickOutside = (event) => {
//     if (event.target === event.currentTarget) {
//       onClose();
//     }
//   };

//   return (
//     <div
//       className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
//       onClick={handleClickOutside}
//     >
//       <div className="w-[637px] rounded bg-white py-[18px]">
//         <div>
//           <h3 className="text-title font-semibold mb-3 ml-[18px]">
//             {capitalizeFirstLetter(title)}
//           </h3>

//           <div className="flex items-center justify-between px-[18px]">
//             <div className="w-[380px]">
//               <InputRow
//                 leftIcon={<LiaSearchSolid />}
//                 placeholder="Search"
//                 value={searchQuery}
//                 onChange={(query) =>
//                   setState({
//                     ...state,
//                     searchQuery: query,
//                   })
//                 }
//               />
//             </div>

//             <p>
//               {selectedItems.length} categories out of {totalItems.length}
//             </p>

//             {selectedItems.length === 0 && (
//               <CheckBox
//                 variant="minus"
//                 checked={!isChecked}
//                 onChange={(e) => handleChangeBox(e.target.checked)}
//               />
//             )}
//             {selectedItems.length > 0 &&
//               selectedItems.length < totalItems.length && (
//                 <CheckBox
//                   checked={isChecked}
//                   variant="minus"
//                   onChange={(e) => handleChangeBox(e.target.checked)}
//                 />
//               )}
//             {selectedItems.length === totalItems.length && (
//               <CheckBox
//                 checked={isChecked}
//                 onChange={(e) => handleChangeBox(e.target.checked)}
//               />
//             )}
//           </div>
//         </div>

//         <div className="flex flex-col gap-2 my-2 h-[400px] overflow-auto">
//           {queryItems.map((item) => (
//             <SelectItem
//               varient={varient}
//               key={item.id}
//               {...item}
//               isChecked={selectedItems.includes(item.id)}
//               onCheckBoxChange={(isChecked) =>
//                 handleCheckBoxChange(isChecked, item.id)
//               }
//             />
//           ))}
//         </div>

//         <div className="flex mt-4 justify-end mr-[18px] gap-[18px]">
//           <Button onClick={() => onClose()} text="cancel" variant="ter" />
//           <Button
//             onClick={handleAddButtonClick}
//             text={`add (${selectedItems.length})`}
//           />
//         </div>
//       </div>
//     </div>
//   );

// import { Button, CheckBox, InputRow, SelectItem } from '..';
// import { LiaSearchSolid } from 'react-icons/lia';
// import { useState, useEffect } from 'react';
// import { capitalizeFirstLetter } from 'src/app/utils';

// const SelectItems = ({ title, onClose, select, varient }) => {
// 	const [state, setState] = useState({
// 		searchQuery: '',
// 		selectedItems: [],
// 		totalItems: select,
// 		isChecked: true
// 	});

// 	const { searchQuery, selectedItems, totalItems, isChecked } = state;

// 	useEffect(() => {
// 		setState((prevState) => ({
// 			...prevState,
// 			totalItems: select
// 		}));
// 	}, [select]);

// 	// useEffect(() => {
// 	//   const storedItemsData = localStorage.getItem("selectedItemsData");
// 	//   if (storedItemsData) {
// 	//     const storedItems = JSON.parse(storedItemsData);
// 	//     const storedItemIds = storedItems.map((item) => item.id);
// 	//     setState((prevState) => ({
// 	//       ...prevState,
// 	//       selectedItems: storedItemIds,
// 	//     }));
// 	//   }
// 	// }, []);

// 	const handleChangeBox = (isChecked) => {
// 		setState((prevState) => ({
// 			...prevState,
// 			isChecked
// 		}));
// 	};

// 	const handleCheckBoxChange = (isChecked, itemId) => {
// 		const updatedItems = isChecked
// 			? [...selectedItems, itemId]
// 			: selectedItems.filter((item) => item !== itemId);
// 		setState((prevState) => ({
// 			...prevState,
// 			selectedItems: updatedItems
// 		}));
// 	};

// 	useEffect(() => {
// 		const updatedSelectedItems = totalItems.filter((item) =>
// 			selectedItems.includes(item.id)
// 		);
// 		setState((prevState) => ({
// 			...prevState,
// 			selectedItems: updatedSelectedItems
// 		}));
// 	}, [searchQuery]);

// 	// const filteredItems = select
// 	//   ? select.filter((item) =>
// 	//       item.title.toLowerCase().includes(searchQuery.toLowerCase())
// 	//     )
// 	//   : [];
// 	const filteredItems = select
// 		? select.filter(
// 				(item) =>
// 					item.title &&
// 					item.title.toLowerCase().includes(searchQuery.toLowerCase())
// 		  )
// 		: [];

// 	const handleAddButtonClick = () => {
// 		const itemsData = totalItems
// 			.filter((item) => selectedItems.includes(item.id))
// 			.map((item) => {
// 				return {
// 					id: item.id,
// 					image: item.img,
// 					title: item.title,
// 					subTitle: item.subTitle,
// 					fName: item.fName,
// 					lName: item.lName,
// 					count: item.count
// 				};
// 			});
// 		localStorage.setItem('selectedItemsData', JSON.stringify(itemsData));
// 		onClose();
// 	};

// 	return (
// 		<div className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50'>
// 			<div className='w-[637px] rounded bg-white py-[18px]'>
// 				{/* header */}
// 				<div>
// 					<h3 className='text-title font-semibold mb-3 ml-[18px]'>
// 						{capitalizeFirstLetter(title)}
// 					</h3>

// 					<div className='flex items-center justify-between px-[18px]'>
// 						{/* input search */}
// 						<div className='w-[380px]'>
// 							<InputRow
// 								leftIcon={<LiaSearchSolid />}
// 								placeholder='Search'
// 								value={searchQuery}
// 								handleOnChange={(value) =>
// 									setState({
// 										...state,
// 										searchQuery: value
// 									})
// 								}
// 							/>
// 						</div>

// 						<p>
// 							{selectedItems.length} categories out of {totalItems.length}
// 						</p>

// 						{selectedItems.length === 0 && (
// 							<CheckBox
// 								variant='minus'
// 								checked={!isChecked}
// 								onChange={(e) => handleChangeBox(e.target.checked)}
// 							/>
// 						)}
// 						{selectedItems.length > 0 &&
// 							selectedItems.length < totalItems.length && (
// 								<CheckBox
// 									checked={isChecked}
// 									variant='minus'
// 									onChange={(e) => handleChangeBox(e.target.checked)}
// 								/>
// 							)}
// 						{selectedItems.length === totalItems.length && (
// 							<CheckBox
// 								checked={isChecked}
// 								onChange={(e) => handleChangeBox(e.target.checked)}
// 							/>
// 						)}
// 					</div>
// 				</div>

// 				{/* contain */}
// 				<div className='flex flex-col gap-2 my-2 h-[400px] overflow-auto'>
// 					{filteredItems.map((item) => {
// 						return (
// 							<SelectItem
// 								varient={varient}
// 								key={item.id}
// 								{...item}
// 								isChecked={selectedItems.includes(item.id)}
// 								onCheckBoxChange={(isChecked) =>
// 									handleCheckBoxChange(isChecked, item.id)
// 								}
// 							/>
// 						);
// 					})}
// 				</div>

// 				<div className='flex mt-4 justify-end mr-[18px] gap-[18px]'>
// 					<Button onClick={() => onClose()} text='cancel' variant='ter' />
// 					<Button
// 						onClick={handleAddButtonClick}
// 						text={`add (${selectedItems.length})`}
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);

// };

// export default SelectItems;

// // localStorage.setItem("selectedCategory", JSON.stringify(itemsData));
// // // specific products

// // localStorage.setItem("selectedProducts", JSON.stringify(itemsData));
// // // specific customer groups

// // localStorage.setItem("selectedGroups", JSON.stringify(itemsData));
// // // specific customers
// // if (varient === "customers")
// //   localStorage.setItem("selectedCustomers", JSON.stringify(itemsData));
