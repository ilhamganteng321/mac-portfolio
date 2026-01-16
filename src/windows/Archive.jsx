import { WindowControls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import { X, CheckCircle, AlertCircle, TrendingUp, Target, Zap, Brain, Coffee, Trash2, RefreshCw, Download, BarChart } from "lucide-react"

const Archive = () => {
  const badHabits = [
    { 
      id: 1, 
      name: "PROCRASTINATION", 
      status: "DELETED", 
      icon: <X className="text-red-600" size={16} />,
      description: "Delaying important tasks for later",
      deletedDate: "2024-01-15"
    },
    { 
      id: 2, 
      name: "COMPLAINING", 
      status: "REMOVED", 
      icon: <X className="text-red-600" size={16} />,
      description: "Focusing on problems instead of solutions",
      deletedDate: "2024-01-14"
    },
    { 
      id: 3, 
      name: "PERFECTIONISM", 
      status: "ARCHIVED", 
      icon: <AlertCircle className="text-amber-600" size={16} />,
      description: "Spending too much time on minor details",
      deletedDate: "2024-01-13"
    },
    { 
      id: 4, 
      name: "MULTITASKING", 
      status: "DELETED", 
      icon: <X className="text-red-600" size={16} />,
      description: "Trying to do everything at once",
      deletedDate: "2024-01-12"
    },
    { 
      id: 5, 
      name: "NO_DOCS", 
      status: "REMOVED", 
      icon: <X className="text-red-600" size={16} />,
      description: "Not reading/writing documentation",
      deletedDate: "2024-01-11"
    },
    { 
      id: 6, 
      name: "COPY_PASTE_CODE", 
      status: "DELETED", 
      icon: <X className="text-red-600" size={16} />,
      description: "Copying code without understanding",
      deletedDate: "2024-01-10"
    },
    { 
      id: 7, 
      name: "NO_TESTING", 
      status: "ARCHIVED", 
      icon: <AlertCircle className="text-amber-600" size={16} />,
      description: "Skipping tests to save time",
      deletedDate: "2024-01-09"
    },
  ]

  const goodPractices = [
    { 
      id: 1, 
      name: "DEEP_WORK", 
      status: "ACTIVE", 
      icon: <Brain className="text-blue-600" size={16} />,
      description: "Focused, uninterrupted coding sessions",
      efficiency: "95%"
    },
    { 
      id: 2, 
      name: "AGILE_METHOD", 
      status: "ACTIVE", 
      icon: <Zap className="text-emerald-600" size={16} />,
      description: "Iterative development with quick feedback",
      efficiency: "92%"
    },
    { 
      id: 3, 
      name: "TEST_DRIVEN", 
      status: "ACTIVE", 
      icon: <CheckCircle className="text-emerald-600" size={16} />,
      description: "Writing tests before implementation",
      efficiency: "88%"
    },
    { 
      id: 4, 
      name: "CONTINUOUS_LEARN", 
      status: "ACTIVE", 
      icon: <TrendingUp className="text-violet-600" size={16} />,
      description: "Daily learning and skill improvement",
      efficiency: "85%"
    },
    { 
      id: 5, 
      name: "CODE_REVIEW", 
      status: "ACTIVE", 
      icon: <Target className="text-orange-600" size={16} />,
      description: "Regular peer code review sessions",
      efficiency: "90%"
    },
    { 
      id: 6, 
      name: "DOCS_FIRST", 
      status: "ACTIVE", 
      icon: <Brain className="text-blue-600" size={16} />,
      description: "Documentation as part of development",
      efficiency: "82%"
    },
    { 
      id: 7, 
      name: "CLEAN_CODE", 
      status: "ACTIVE", 
      icon: <CheckCircle className="text-emerald-600" size={16} />,
      description: "Following clean code principles",
      efficiency: "87%"
    },
  ]

  const systemStats = {
    badHabitsRemoved: 7,
    goodPracticesActive: 7,
    productivityIncrease: "94%",
    lastUpdate: "Just now",
    systemStatus: "OPTIMIZED",
    storageSaved: "3.2GB",
    timeSaved: "28 hours/week"
  }

  return (
    <>
      <div id="window-header">
        <WindowControls target="trash" />
      </div>

      <div className="archive-content p-8 bg-gray-50 min-h-[500px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mr-4 shadow-lg">
              <Trash2 size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Productivity Archive</h1>
              <p className="text-gray-600">System cleanup & performance optimization</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm">
              <span className="text-sm font-semibold text-emerald-600">✓ {systemStats.systemStatus}</span>
            </div>
            <button className="p-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
              <RefreshCw size={18} className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-medium text-gray-500">Deleted Habits</div>
              <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                <X size={16} className="text-red-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{systemStats.badHabitsRemoved}</div>
            <div className="text-xs text-gray-400">Permanently removed from system</div>
          </div>
          
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-medium text-gray-500">Active Practices</div>
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                <CheckCircle size={16} className="text-emerald-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{systemStats.goodPracticesActive}</div>
            <div className="text-xs text-gray-400">Optimized processes running</div>
          </div>
          
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-medium text-gray-500">Productivity</div>
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <BarChart size={16} className="text-blue-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{systemStats.productivityIncrease}</div>
            <div className="text-xs text-gray-400">Performance improvement</div>
          </div>
          
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-medium text-gray-500">Time Saved</div>
              <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                <Coffee size={16} className="text-violet-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{systemStats.timeSaved}</div>
            <div className="text-xs text-gray-400">Weekly efficiency gain</div>
          </div>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Deleted Habits */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-red-50 to-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mr-3">
                    <Trash2 className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">Deleted Habits</h2>
                    <p className="text-sm text-gray-600">Removed from workflow</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-red-100 rounded-full">
                  <span className="text-xs font-semibold text-red-700">CLEANED</span>
                </div>
              </div>
            </div>
            
            <div className="p-1">
              <div className="max-h-[320px] overflow-y-auto">
                {badHabits.map((habit) => (
                  <div 
                    key={habit.id} 
                    className="flex items-center p-4 hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-colors"
                  >
                    <div className="mr-4">
                      <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                        {habit.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-mono text-sm font-semibold text-gray-900 truncate">{habit.name}</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          habit.status === 'DELETED' 
                            ? 'bg-red-100 text-red-700' 
                            : 'bg-amber-100 text-amber-700'
                        }`}>
                          {habit.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{habit.description}</p>
                      <div className="flex items-center text-xs text-gray-400">
                        <span>Removed: {habit.deletedDate}</span>
                        <span className="mx-2">•</span>
                        <span className="px-2 py-0.5 bg-gray-100 rounded">PERMANENT</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Total cleaned: <span className="font-semibold text-gray-900">{badHabits.length} items</span>
                </div>
                <button className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center">
                  <X size={14} className="mr-1" />
                  Empty recycle bin
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Active Practices */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-emerald-50 to-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mr-3">
                    <Zap className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">Active Practices</h2>
                    <p className="text-sm text-gray-600">Running at optimal level</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-emerald-100 rounded-full">
                  <span className="text-xs font-semibold text-emerald-700">ACTIVE</span>
                </div>
              </div>
            </div>
            
            <div className="p-1">
              <div className="max-h-[320px] overflow-y-auto">
                {goodPractices.map((practice) => (
                  <div 
                    key={practice.id} 
                    className="flex items-center p-4 hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-colors"
                  >
                    <div className="mr-4">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        {practice.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center">
                          <span className="font-mono text-sm font-semibold text-gray-900 truncate">{practice.name}</span>
                          <div className="ml-2 px-2 py-0.5 bg-emerald-100 rounded text-xs font-medium text-emerald-700">
                            {practice.efficiency}
                          </div>
                        </div>
                        <span className="px-2 py-1 rounded text-xs font-medium bg-emerald-100 text-emerald-700">
                          ACTIVE
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{practice.description}</p>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                        <div 
                          className="bg-emerald-500 h-1.5 rounded-full" 
                          style={{ width: practice.efficiency }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="px-6 py-4 border-t border-gray-100 bg-gradient-to-r from-emerald-50 to-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={14} className="mr-2 text-emerald-500" />
                  <span>All systems operational</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-emerald-700">REAL-TIME OPTIMIZATION</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              <span className="font-medium text-gray-900">Last system scan:</span> Today at {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              <span className="mx-2">•</span>
              <span className="text-emerald-600 font-medium">✓ No issues detected</span>
            </div>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700 flex items-center shadow-sm">
                <RefreshCw size={16} className="mr-2" />
                Rescan System
              </button>
              <button className="px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-all text-sm font-medium flex items-center shadow-lg hover:shadow-xl">
                <Download size={16} className="mr-2" />
                Export Report
              </button>
            </div>
          </div>
        </div>

        {/* System Status Bar */}
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-white border border-blue-200 flex items-center justify-center mr-3 shadow-sm">
                <BarChart size={20} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">System Performance</h3>
                <p className="text-sm text-gray-600">Running at peak efficiency with all optimizations active</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-4 text-right">
                <div className="text-2xl font-bold text-gray-900">{systemStats.productivityIncrease}</div>
                <div className="text-xs text-gray-500">Overall efficiency</div>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center shadow-lg">
                <CheckCircle size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const ArchiveWindow = WindowWrapper(Archive, "trash")
export default ArchiveWindow