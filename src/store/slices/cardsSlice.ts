import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Cat {
  id: number;
  name: string;
  image: string;
  age: number;
  rate: number;
  favorite: boolean;
  description: string;
}

interface Message {
  message: string;
}

interface Initial {
  cards: Cat[];
  status: boolean;
}

const initialState: Initial = {
  cards: [],
  status: true,
};

const axiosInstance = axios.create({
  baseURL: 'https://cats.petiteweb.dev/api/single/rainbowisperfect/',
  headers: { 'Content-type': 'application/json' },
});

export const fetchCats = createAsyncThunk<
  Cat[],
  undefined,
  { rejectValue: string }
>('cards/fetchCats', async function (_, { rejectWithValue }) {
  const { data, status } = await axiosInstance.get<Cat[]>('show');

  if (status !== 200) {
    return rejectWithValue('Error');
  }

  return data;
});

export const addCat = createAsyncThunk<Cat, Cat, { rejectValue: string }>(
  'cards/addCat',
  async function (cat, { rejectWithValue }) {
    const { status } = await axiosInstance.post<Message>(
      'add',
      JSON.stringify(cat)
    );

    if (status !== 200) {
      return rejectWithValue('Error');
    }

    return cat;
  }
);

export const deleteCat = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>('cards/deleteCat', async function (id, { rejectWithValue }) {
  const { status } = await axiosInstance.delete<Message>(`delete/${id}`);

  if (status !== 200) {
    return rejectWithValue('Error');
  }

  return id;
});

export const getCatById = createAsyncThunk<
  Cat,
  number,
  { rejectValue: string }
>('cards/getCatById', async function (id, { rejectWithValue }) {
  const { data, status } = await axiosInstance.get<Cat>(`show/${id}`);

  if (status !== 200) {
    return rejectWithValue('Error');
  }

  return data;
});

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCats.pending, (state) => {
        state.status = true;
      })
      .addCase(fetchCats.fulfilled, (state, action) => {
        state.status = false;
        state.cards = action.payload;
      })
      .addCase(fetchCats.rejected, (state) => {
        state.status = false;
      })
      .addCase(addCat.pending, (state) => {
        state.status = true;
      })
      .addCase(addCat.fulfilled, (state, action) => {
        state.status = false;
        state.cards.push(action.payload);
      })
      .addCase(addCat.rejected, (state) => {
        state.status = false;
      })
      .addCase(deleteCat.pending, (state) => {
        state.status = true;
      })
      .addCase(deleteCat.fulfilled, (state, action) => {
        state.status = false;
        state.cards = state.cards.filter((card) => card.id !== action.payload);
      })
      .addCase(deleteCat.rejected, (state) => {
        state.status = false;
      })
      .addCase(getCatById.pending, (state) => {
        state.status = true;
      })
      .addCase(getCatById.fulfilled, (state) => {
        state.status = false;
      })
      .addCase(getCatById.rejected, (state) => {
        state.status = false;
      });
  },
});

export default cardSlice.reducer;
