import pandas as pd
from sklearn.preprocessing import StandardScaler

try:
    # Replace with the correct path to your dataset file
    file_path = "/autism_data.csv"  
    df = pd.read_csv(file_path)  
    print("Dataset loaded successfully.")
except FileNotFoundError:
    print(f"Error: The dataset file was not found at '{file_path}'. Please check the path.")
    # Remove the exit() call to allow the rest of the code to execute
    # exit()  
except Exception as e:  # Catch other potential errors during file loading
    print(f"An error occurred while loading the dataset: {e}")
    # Remove the exit() call to allow the rest of the code to execute
    # exit()

# Check if df is defined before proceeding
if 'df' in locals():
    print("Columns in the DataFrame:", df.columns)

    df.ffill(inplace=True)

    categorical_columns = ['id_1', 'id_2', 'id_3', 'id_4', 'id_5', 'id_6', 'id_7', 'id_8', 'id_9', 'id_10',
                           'a1_score', 'a2_score', 'a3_score', 'a4_score', 'a5_score',
                           'a6_score', 'a7_score', 'a8_score', 'a9_score', 'a10_score',
                           'age', 'gender', 'ethnicity', 'jaundice', 'austim',
                           'contry_of_res', 'used_app_before', 'result', 'age_desc',
                           'relation']

    df.columns = df.columns.str.strip().str.lower()

    categorical_columns = [col.lower() for col in categorical_columns]

    existing_categorical_columns = [col for col in categorical_columns if col in df.columns]

    if not existing_categorical_columns:
        print("Error: None of the specified categorical columns are present in the DataFrame.")
        print("Available columns are:", df.columns)
        # Remove the exit() call to allow the rest of the code to execute
        # exit()

    df = pd.get_dummies(df, columns=existing_categorical_columns)
    print("Columns in the DataFrame after one-hot encoding:", df.columns)

    feature_columns = df.columns.tolist()

    # Standardizing the dataset using StandardScaler
    scaler = StandardScaler()
    df[feature_columns] = scaler.fit_transform(df[feature_columns])

    # Replace with the desired path to save the preprocessed data
    output_file_path = "/autism_data.csv"
    df.to_csv(output_file_path, index=False)
    print("Preprocessed data saved successfully.")
else:
    print("DataFrame 'df' was not created. Please check the file path and loading process.")