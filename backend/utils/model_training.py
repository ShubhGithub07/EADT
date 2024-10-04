import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor  
from sklearn.metrics import mean_squared_error
import joblib  

df = pd.read_csv("C:/Users/yadre/Downloads/Autism-Prediction-using-Machine-Learning---DataSet.csv")

print("Columns in the DataFrame:", df.columns)

target_column = 'result' 

if target_column not in df.columns:
    print(f"Error: The target column '{target_column}' is not found in the DataFrame.")
    print("Available columns are:", df.columns)
    exit()

feature_columns = df.columns.tolist()
X = df[feature_columns].drop(columns=[target_column]) 
y = df[target_column]  

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestRegressor()

model.fit(X_train, y_train)

y_pred = model.predict(X_test)

print("Mean Squared Error:", mean_squared_error(y_test, y_pred))

joblib.dump(model, "C:/Users/yadre/Downloads/autism_model_regressor.pkl")
print("Regression model saved successfully.")
