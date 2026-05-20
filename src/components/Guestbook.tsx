import React, { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';

interface Entry {
  id: string;
  name: string;
  date: string;
  message: string;
}

export function Guestbook() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const savedEntries = localStorage.getItem('guestbookEntries');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const today = new Date();
    const dateFormatted = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

    const newEntry: Entry = {
      id: Date.now().toString(),
      name: name.trim(),
      date: dateFormatted,
      message: message.trim(),
    };

    const newEntries = [newEntry, ...entries];
    setEntries(newEntries);
    localStorage.setItem('guestbookEntries', JSON.stringify(newEntries));
    setName('');
    setMessage('');
    setCurrentPage(1); // Go to first page on new entry
  };

  const handleDelete = (id: string) => {
    const newEntries = entries.filter((entry) => entry.id !== id);
    setEntries(newEntries);
    localStorage.setItem('guestbookEntries', JSON.stringify(newEntries));
    
    // Adjust current page if the last item on the page is deleted
    const newTotalPages = Math.ceil(newEntries.length / itemsPerPage);
    if (currentPage > newTotalPages && newTotalPages > 0) {
      setCurrentPage(newTotalPages);
    }
  };

  const totalPages = Math.ceil(entries.length / itemsPerPage);
  const displayedEntries = entries.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section className="py-section-gap-desktop bg-gray-light text-black" id="board">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-gutter">
        <div className="mb-12">
          <h2 className="font-headline-lg text-headline-lg text-black">Guestbook</h2>
          <p className="font-body-md text-body-md text-gray-mid mt-2">
            방문 흔적을 남겨주세요. 모든 메시지는 소중하게 읽고 있습니다.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <form className="space-y-4 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm" onSubmit={handleSubmit}>
              <div>
                <label className="font-label-mono text-xs uppercase text-gray-mid mb-1 block">NAME</label>
                <input
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-black transition-colors text-black"
                  placeholder="이름"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="font-label-mono text-xs uppercase text-gray-mid mb-1 block">MESSAGE</label>
                <textarea
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-black transition-colors text-black"
                  placeholder="메시지를 입력하세요..."
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={!name.trim() || !message.trim()}
                className="w-full bg-black text-white py-3 rounded-lg font-headline-md text-[16px] hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                글 남기기
              </button>
            </form>
          </div>
          <div className="md:col-span-2 space-y-6">
            {entries.length === 0 ? (
              <div className="flex items-center justify-center h-full min-h-[200px]">
                <p className="text-sm text-gray-400">댓글을 남겨주세요.</p>
              </div>
            ) : (
              <>
                <div className="space-y-6">
                  {displayedEntries.map((entry) => (
                    <div key={entry.id} className="border-b border-gray-200 pb-6 group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-headline-md text-body-lg font-bold text-black">{entry.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="font-label-mono text-xs text-gray-mid">{entry.date}</span>
                          <button
                            onClick={() => handleDelete(entry.id)}
                            className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label="삭제"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                      <p className="font-body-md text-body-md text-gray-800 whitespace-pre-wrap">
                        {entry.message}
                      </p>
                    </div>
                  ))}
                </div>
                
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 pt-4">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-1 rounded border border-gray-200 text-gray-mid disabled:opacity-50 hover:bg-gray-100 transition-colors"
                    >
                      &lt;
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
                          currentPage === page
                            ? 'bg-black text-white font-bold'
                            : 'text-gray-mid hover:bg-gray-100'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 rounded border border-gray-200 text-gray-mid disabled:opacity-50 hover:bg-gray-100 transition-colors"
                    >
                      &gt;
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
