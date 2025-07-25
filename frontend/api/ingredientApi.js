// IP 주소는 본인 컴퓨터의 IP로 설정해야 합니다.
const API_BASE_URL = 'http://192.168.171.72:3000/api'; 
const USER_ID = 'user01'; // 임시 사용자 ID

// 모든 재료 가져오기
export const fetchIngredients = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/ingredients/${USER_ID}`);
        if (!response.ok) throw new Error('서버 오류');
        return await response.json();
    } catch (error) {
        console.error("Fetch Ingredients Error:", error);
        return [];
    }
};

// 재료 추가하기
export const addIngredientAPI = async (name, quantity) => {
    try {
        const response = await fetch(`${API_BASE_URL}/ingredients/${USER_ID}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, quantity }),
        });
        if (!response.ok) throw new Error('서버 오류');
        return await response.json();
    } catch (error) {
        console.error("Add Ingredient Error:", error);
        return null;
    }
};

// 재료 수량 수정하기
export const updateIngredientAPI = async (ingredientId, quantity) => {
     try {
        const response = await fetch(`${API_BASE_URL}/ingredients/${USER_ID}/${ingredientId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ quantity }),
        });
        if (!response.ok) throw new Error('서버 오류');
        return await response.json();
    } catch (error) {
        console.error("Update Ingredient Error:", error);
        return null;
    }
};

// 재료 삭제하기
export const deleteIngredientAPI = async (ingredientId) => {
    try {
        // 여기서 ingredientId가 URL 경로로 올바르게 전달됩니다.
        const response = await fetch(`${API_BASE_URL}/ingredients/${USER_ID}/${ingredientId}`, {
            method: 'DELETE',
        });
        return response.ok;
    } catch (error) {
        console.error("Delete Ingredient Error:", error);
        return false;
    }
};
