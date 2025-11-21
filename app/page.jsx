'use client';

import { useState } from 'react';

type Tab = 'schedule' | 'packing' | 'expense' | 'places';

const days = ['12/4 (Wed)', '12/5 (Thu)', '12/6 (Fri)', '12/7 (Sat)'] as const;
type Day = (typeof days)[number];

type ScheduleItem = {
  time: string;
  title: string;
  note?: string;
};

const scheduleData: Record<Day, ScheduleItem[]> = {
  '12/4 (Wed)': [
    { time: 'AM 09:00', title: '인천공항 도착', note: '체크인 & 아침 간단히' },
    { time: 'PM 01:00', title: '나고야 도착', note: '호텔 체크인' },
    { time: 'PM 05:00', title: '사카에 산책', note: '저녁 & 쇼핑' },
  ],
  '12/5 (Thu)': [
    { time: 'AM 10:00', title: '나고야성', note: '성 + 정원 구경' },
    { time: 'PM 02:00', title: '오스 상점가', note: '간식 & 쇼핑' },
  ],
  '12/6 (Fri)': [
    { time: 'AM 09:00', title: '히다 다카야마 당일치기', note: '히다규 점심' },
    { time: 'PM 05:00', title: '나고야 복귀', note: '호텔 휴식' },
  ],
  '12/7 (Sat)': [
    { time: 'AM 10:00', title: '마지막 쇼핑', note: '기념품 정리' },
    { time: 'PM 02:00', title: '공항 이동', note: '출국' },
  ],
};

type Expense = {
  id: number;
  date: string;
  category: string;
  amount: number;
  memo?: string;
};

type Place = {
  id: number;
  name: string;
  note?: string;
  mapUrl?: string;
};

function cls(...names: (string | false | null | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

export default function HomePage() {
  const [tab, setTab] = useState<Tab>('schedule');
  const [selectedDay, setSelectedDay] = useState<Day>('12/4 (Wed)');

  const [packingInput, setPackingInput] = useState('');
  const [packingList, setPackingList] = useState<string[]>([
    '여권 & 비행기 티켓',
    '지갑 (엔화, 카드)',
    '휴대폰 충전기 & 보조 배터리',
  ]);

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [expenseForm, setExpenseForm] = useState({
    date: '12/4',
    category: '식비',
    amount: '',
    memo: '',
  });

  const [places, setPlaces] = useState<Place[]>([
    {
      id: 1,
      name: '나고야성',
      note: '낮에 가기 좋음',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Nagoya+Castle',
    },
    {
      id: 2,
      name: '히다 다카야마',
      note: '히다규 꼭 먹기!',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Takayama+Gifu',
    },
  ]);
  const [placeInput, setPlaceInput] = useState({
    name: '',
    note: '',
    mapUrl: '',
  });

  const handleAddPacking = () => {
    const item = packingInput.trim();
    if (!item) return;
    setPackingList((prev) => [...prev, item]);
    setPackingInput('');
  };

  const handleTogglePacking = (item: string) => {
    setPackingList((prev) =>
      prev.map((v) =>
        v === item ? (v.startsWith('✅ ') ? v : `✅ ${v}`) : v
      )
    );
  };

  const handleAddExpense = () => {
    if (!expenseForm.amount.trim()) return;
    const num = Number(expenseForm.amount.replace(/,/g, ''));
    if (Number.isNaN(num)) return;

    setExpenses((prev) => [
      ...prev,
      {
        id: Date.now(),
        date: expenseForm.date,
        category: expenseForm.category,
        amount: num,
        memo: expenseForm.memo || undefined,
      },
    ]);

    setExpenseForm((prev) => ({ ...prev, amount: '', memo: '' }));
  };

  const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);

  const handleAddPlace = () => {
    const name = placeInput.name.trim();
    if (!name) return;
    setPlaces((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        note: placeInput.note || undefined,
        mapUrl: placeInput.mapUrl || undefined,
      },
    ]);
    setPlaceInput({ name: '', note: '', mapUrl: '' });
  };

  return (
    <main className="min-h-screen bg-rose-50 flex justify-center px-4 py-8">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg shadow-rose-100 p-6 md:p-8">
        {/* 헤더 */}
        <header className="mb-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400">
            Nagoya Family Trip
          </p>
          <h1 className="mt-1 text-2xl md:text-3xl font-bold text-gray-900">
            12/4 – 12/7 Family Trip to Nagoya
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            서연이네 나고야 가족여행 일정 · 짐싸기 · 지출 · 가볼 곳을 한 번에
            정리하는 작은 전용 앱 ✨
          </p>
        </header>

        {/* 탭 버튼 */}
        <nav className="flex flex-wrap gap-2 mb-6">
          {[
            { id: 'schedule', label: '📅 일정' },
            { id: 'packing', label: '🎒 짐싸기' },
            { id: 'expense', label: '💸 지출' },
            { id: 'places', label: '⭐ 가볼 곳' },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id as Tab)}
              className={cls(
                'px-4 py-2 text-xs md:text-sm rounded-full border transition',
                tab === (t.id as Tab)
                  ? 'bg-rose-500 text-white border-rose-500 shadow-sm'
                  : 'bg-white text-gray-700 border-rose-100 hover:bg-rose-50'
              )}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {/* 콘텐츠 */}
        <section className="space-y-4">
          {tab === 'schedule' && (
            <section>
              <div className="flex flex-wrap gap-2 mb-4">
                {days.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setSelectedDay(d)}
                    className={cls(
                      'px-3 py-1 rounded-full text-xs border',
                      selectedDay === d
                        ? 'bg-rose-100 text-rose-600 border-rose-200'
                        : 'bg-white text-gray-600 border-rose-100 hover:bg-rose-50'
                    )}
                  >
                    {d}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                {scheduleData[selectedDay].map((item, idx) => (
                  <div
                    key={`${item.time}-${idx}`}
                    className="flex gap-3 p-3 rounded-2xl bg-rose-50"
                  >
                    <div className="text-[11px] font-semibold text-rose-500 mt-0.5 whitespace-nowrap">
                      {item.time}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {item.title}
                      </p>
                      {item.note && (
                        <p className="mt-0.5 text-xs text-gray-500">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {tab === 'packing' && (
            <section className="space-y-3">
              <div className="flex gap-2">
                <input
                  value={packingInput}
                  onChange={(e) => setPackingInput(e.target.value)}
                  placeholder="챙길 물건 (예: 아들 잠옷)"
                  className="flex-1 px-3 py-2 text-sm border border-rose-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
                <button
                  type="button"
                  onClick={handleAddPacking}
                  className="px-4 py-2 text-sm font-semibold text-white rounded-2xl bg-rose-500 hover:bg-rose-600"
                >
                  추가
                </button>
              </div>
              <ul className="space-y-2 text-sm">
                {packingList.map((item) => (
                  <li
                    key={item}
                    onClick={() => handleTogglePacking(item)}
                    className="flex items-center justify-between px-3 py-2 bg-rose-50 rounded-2xl cursor-pointer hover:bg-rose-100"
                  >
                    <span>{item}</span>
                    <span className="text-[11px] text-gray-400">
                      탭해서 체크
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {tab === 'expense' && (
            <section className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                <div>
                  <label className="block mb-1 text-[11px] text-gray-500">
                    날짜
                  </label>
                  <input
                    value={expenseForm.date}
                    onChange={(e) =>
                      setExpenseForm((prev) => ({
                        ...prev,
                        date: e.target.value,
                      }))
                    }
                    className="w-full px-2 py-1 border border-rose-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-[11px] text-gray-500">
                    항목
                  </label>
                  <input
                    value={expenseForm.category}
                    onChange={(e) =>
                      setExpenseForm((prev) => ({
                        ...prev,
                        category: e.target.value,
                      }))
                    }
                    className="w-full px-2 py-1 border border-rose-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-[11px] text-gray-500">
                    금액(엔)
                  </label>
                  <input
                    value={expenseForm.amount}
                    onChange={(e) =>
                      setExpenseForm((prev) => ({
                        ...prev,
                        amount: e.target.value,
                      }))
                    }
                    className="w-full px-2 py-1 border border-rose-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-[11px] text-gray-500">
                    메모
                  </label>
                  <input
                    value={expenseForm.memo}
                    onChange={(e) =>
                      setExpenseForm((prev) => ({
                        ...prev,
                        memo: e.target.value,
                      }))
                    }
                    className="w-full px-2 py-1 border border-rose-200 rounded-lg"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={handleAddExpense}
                className="w-full py-2 text-xs font-semibold text-white rounded-2xl bg-rose-500 hover:bg-rose-600"
              >
                지출 추가
              </button>

              <div className="p-3 rounded-2xl bg-rose-50 text-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-800">총 지출</span>
                  <span className="font-bold text-rose-600">
                    ¥ {totalExpense.toLocaleString()}
                  </span>
                </div>
                <ul className="space-y-1">
                  {expenses.map((e) => (
                    <li
                      key={e.id}
                      className="flex items-center justify-between border-b border-rose-100 py-1 last:border-0"
                    >
                      <span>
                        <span className="mr-1 text-gray-500">{e.date}</span>
                        <span className="font-medium">{e.category}</span>
                        {e.memo && (
                          <span className="ml-1 text-gray-400">· {e.memo}</span>
                        )}
                      </span>
                      <span>¥ {e.amount.toLocaleString()}</span>
                    </li>
                  ))}
                  {expenses.length === 0 && (
                    <li className="py-2 text-gray-400">
                      아직 등록된 지출이 없어요.
                    </li>
                  )}
                </ul>
              </div>
            </section>
          )}

          {tab === 'places' && (
            <section className="space-y-3 text-sm">
              <div className="space-y-2">
                <input
                  value={placeInput.name}
                  onChange={(e) =>
                    setPlaceInput((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-rose-200 rounded-2xl text-sm"
                  placeholder="장소 이름 (예: 히사야오도리 공원)"
                />
                <input
                  value={placeInput.note}
                  onChange={(e) =>
                    setPlaceInput((prev) => ({ ...prev, note: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-rose-200 rounded-2xl text-sm"
                  placeholder="메모 (선택)"
                />
                <input
                  value={placeInput.mapUrl}
                  onChange={(e) =>
                    setPlaceInput((prev) => ({
                      ...prev,
                      mapUrl: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-rose-200 rounded-2xl text-sm"
                  placeholder="Google Maps 링크 (선택)"
                />
                <button
                  type="button"
                  onClick={handleAddPlace}
                  className="w-full py-2 text-xs font-semibold text-white rounded-2xl bg-rose-500 hover:bg-rose-600"
                >
                  ⭐ 장소 추가하기
                </button>
              </div>

              <ul className="space-y-2">
                {places.map((p) => (
                  <li
                    key={p.id}
                    className="px-3 py-2 bg-rose-50 rounded-2xl border border-rose-100"
                  >
                    <p className="font-semibold text-gray-900">{p.name}</p>
                    {p.note && (
                      <p className="mt-0.5 text-xs text-gray-500">{p.note}</p>
                    )}
                    {p.mapUrl && (
                      <a
                        href={p.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-block text-xs font-semibold text-rose-600 underline"
                      >
                        구글맵에서 보기
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>
      </div>
    </main>
  );
}
