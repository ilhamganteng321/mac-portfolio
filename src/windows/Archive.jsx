import { WindowControls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import { X, CheckCircle, AlertCircle, Trash2, RefreshCw, Download, BarChart, Zap } from "lucide-react"

const Archive = () => {
  const badHabits = [
    { id: 1, name: "PROCRASTINATION", status: "Deleted", icon: <X size={14} />, deletedDate: "2024-01-15" },
    { id: 2, name: "COMPLAINING", status: "Removed", icon: <X size={14} />, deletedDate: "2024-01-14" },
    { id: 3, name: "PERFECTIONISM", status: "Archived", icon: <AlertCircle size={14} />, deletedDate: "2024-01-13" },
    { id: 4, name: "MULTITASKING", status: "Deleted", icon: <X size={14} />, deletedDate: "2024-01-12" },
    { id: 5, name: "NO_DOCS", status: "Removed", icon: <X size={14} />, deletedDate: "2024-01-11" },
    { id: 6, name: "COPY_PASTE_CODE", status: "Deleted", icon: <X size={14} />, deletedDate: "2024-01-10" },
    { id: 7, name: "NO_TESTING", status: "Archived", icon: <AlertCircle size={14} />, deletedDate: "2024-01-09" },
  ]

  const goodPractices = [
    { id: 1, name: "DEEP_WORK", status: "ACTIVE", icon: <CheckCircle size={14} />, efficiency: "95%" },
    { id: 2, name: "AGILE_METHOD", status: "ACTIVE", icon: <Zap size={14} />, efficiency: "92%" },
    { id: 3, name: "TEST_DRIVEN", status: "ACTIVE", icon: <CheckCircle size={14} />, efficiency: "88%" },
    { id: 4, name: "CONTINUOUS_LEARN", status: "ACTIVE", icon: <BarChart size={14} />, efficiency: "85%" },
    { id: 5, name: "CODE_REVIEW", status: "ACTIVE", icon: <CheckCircle size={14} />, efficiency: "90%" },
    { id: 6, name: "DOCS_FIRST", status: "ACTIVE", icon: <CheckCircle size={14} />, efficiency: "82%" },
    { id: 7, name: "CLEAN_CODE", status: "ACTIVE", icon: <CheckCircle size={14} />, efficiency: "87%" },
  ]

  const systemStats = {
    badHabitsRemoved: 7,
    goodPracticesActive: 7,
    productivityIncrease: "94%",
    timeSaved: "28h/w"
  }

  return (
      <>
        <div id="window-header">
          <WindowControls target="trash" />
        </div>

        <div className="archive-content p-6 bg-white min-h-[500px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mr-3">
                <Trash2 size={20} className="text-red-600" />
              </div>
              <div>
                <h1 className="text-xl font-roboto font-bold text-gray-900">Archive</h1>
                <p className="text-sm text-gray-500">System cleanup</p>
              </div>
            </div>
            <div className="px-3 py-1 bg-emerald-50 rounded-full">
              <span className="text-xs font-medium text-emerald-700">OPTIMIZED</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm font-roboto text-gray-500 mb-1">Deleted</div>
              <div className="text-sm font-bold font-roboto text-gray-900">{systemStats.badHabitsRemoved}</div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm font-roboto text-gray-500 mb-1">Active</div>
              <div className="text-sm font-bold text-gray-900 font-roboto">{systemStats.goodPracticesActive}</div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1 font-roboto">Productivity</div>
              <div className="text-sm font-bold text-gray-900 font-roboto">{systemStats.productivityIncrease}</div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm font-roboto text-gray-500 mb-1">Time Saved</div>
              <div className="text-sm font-bold font-roboto text-gray-900">{systemStats.timeSaved}</div>
            </div>
          </div>

          {/* Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Deleted Habits */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Trash2 size={16} className="text-red-600 mr-2" />
                    <h2 className="font-semibold font-inter text-gray-900">Deleted Habits</h2>
                  </div>
                  <span className="text-xs text-red-600 font-medium">CLEANED</span>
                </div>
              </div>

              <div className="divide-y divide-gray-100 font-">
                {badHabits.map((habit) => (
                    <div key={habit.id} className="p-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-6 h-6 rounded flex items-center justify-center mr-3 ${
                            habit.status === 'ARCHIVED' ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'
                        }`}>
                          {habit.icon}
                        </div>
                        <div className="mr-5">
                          <div className="font-inter text-xs font-medium text-gray-900">{habit.name}</div>
                          <div className="text-xs text-gray-500">{habit.deletedDate}</div>
                        </div>
                      </div>
                      <span className={`text-xs font-inter px-2 py-1 rounded ${
                          habit.status === 'DELETED' ? 'bg-red-100 text-red-700' :
                              habit.status === 'REMOVED' ? 'bg-red-100 text-red-700' :
                                  'bg-amber-100 text-amber-700'
                      }`}>
                    {habit.status}
                  </span>
                    </div>
                ))}
              </div>
            </div>

            {/* Active Practices */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Zap size={16} className="text-emerald-600 mr-2" />
                    <h2 className="font-semibold font-inter text-gray-900">Active Practices</h2>
                  </div>
                  <span className="text-xs text-emerald-600 font-medium">ACTIVE</span>
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                {goodPractices.map((practice) => (
                    <div key={practice.id} className="p-3 flex items-center justify-between">
                      <div className="flex items-center flex-1">
                        <div className="w-6 h-6 rounded bg-emerald-50 flex items-center justify-center mr-3 text-emerald-600">
                          {practice.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-inter text-xs font-medium text-gray-900">{practice.name}</div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                            <div
                                className="bg-emerald-500 h-1.5 rounded-full"
                                style={{ width: practice.efficiency }}
                            />
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-emerald-700 ml-3">{practice.efficiency}</span>
                    </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-600">
                <span className="text-emerald-600 font-medium">✓ System optimized</span>
                <span className="mx-2">•</span>
                Last scan: Today
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 text-sm font-medium text-gray-700 flex items-center">
                  <RefreshCw size={14} className="mr-1.5" />
                  Rescan
                </button>
                <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium flex items-center">
                  <Download size={14} className="mr-1.5" />
                  Export
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

const ArchiveWindow = WindowWrapper(Archive, "trash")
export default ArchiveWindow