import pandas as pd
from sklearn.preprocessing import StandardScaler

try:
    df = pd.read_csv("C:/Users/yadre/Downloads/Autism-Prediction-using-Machine-Learning---DataSet.csv")  
    print("Dataset loaded successfully.")
except FileNotFoundError:
    print("Error: The dataset file was not found. Please check the path.")
    exit()

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
    exit()

df = pd.get_dummies(df, columns=existing_categorical_columns)
print("Columns in the DataFrame after one-hot encoding:", df.columns)

feature_columns = df.columns.tolist()

# Standardizing the dataset using StandardScaler
scaler = StandardScaler()
df[feature_columns] = scaler.fit_transform(df[feature_columns])

df.to_csv("C:/Users/yadre/Downloads/Autism-Prediction-using-Machine-Learning---DataSet.csv", index=False)
print("Preprocessed data saved successfully.")