import React from "react";
import { useConversionProgress } from "@/hooks/use-conversion-progress";
import Alert from "@/components/alert";
import CodeBlock from "@/components/code-block";

interface StepContentProps {
  step: string;
}

export default function StepContent({ step }: StepContentProps) {
  const { showStep } = useConversionProgress();

  if (step === 'overview') {
    return <OverviewContent showStep={showStep} />;
  }

  if (step === 'documentation') {
    return <DocumentationContent showStep={showStep} />;
  }

  if (step === 'step1') {
    return <Step1Content showStep={showStep} />;
  }

  if (step === 'step2') {
    return <Step2Content showStep={showStep} />;
  }

  if (step === 'step3') {
    return <Step3Content showStep={showStep} />;
  }

  if (step === 'step4') {
    return <Step4Content showStep={showStep} />;
  }

  if (step === 'step5') {
    return <Step5Content showStep={showStep} />;
  }

  if (step === 'step6') {
    return <Step6Content showStep={showStep} />;
  }

  if (step === 'step7') {
    return <Step7Content showStep={showStep} />;
  }

  if (step === 'step8') {
    return <Step8Content showStep={showStep} />;
  }

  if (step === 'step9') {
    return <Step9Content showStep={showStep} />;
  }

  return null;
}

function DocumentationContent({ showStep }: { showStep: (step: string) => void }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
            <i className="fas fa-book text-white"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">InfoSewer Documentation</h1>
            <p className="text-gray-600 dark:text-gray-300">Known documentation and reference materials</p>
          </div>
        </div>
      </div>

      {/* Official Autodesk Documentation */}
      <div className="space-y-8">
        <Alert type="info">
          <h4 className="font-semibold mb-3 text-sm sm:text-base">
            <i className="fas fa-external-link-alt mr-2"></i>
            Official Autodesk Documentation Links
          </h4>
          <div className="space-y-4">
            <div className="grid gap-4">
              <a href="https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/Knowledge-Importing-InfoSewer-to-InfoWorks-ICM-Overview-of-all-Import-Steps.html" className="block p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors" target="_blank" rel="noopener noreferrer">
                <div className="flex items-start space-x-3">
                  <i className="fas fa-file-alt text-blue-600 dark:text-blue-400 mt-1"></i>
                  <div>
                    <h5 className="font-medium text-blue-800 dark:text-blue-200">Overview of All Import Steps</h5>
                    <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">Complete conversion process overview and methodology</p>
                  </div>
                </div>
              </a>

              <a href="https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/Step-1-Import-Nodes-and-Create-Subcatchments-in-the-Import-of-InfoSewer-to-ICM-InfoWorks.html" className="block p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors" target="_blank" rel="noopener noreferrer">
                <div className="flex items-start space-x-3">
                  <i className="fas fa-circle-nodes text-green-600 dark:text-green-400 mt-1"></i>
                  <div>
                    <h5 className="font-medium text-green-800 dark:text-green-200">Step 1: Import Nodes and Create Subcatchments</h5>
                    <p className="text-sm text-green-600 dark:text-green-300 mt-1">Node import procedures and subcatchment creation</p>
                  </div>
                </div>
              </a>

              <a href="https://github.com/innovyze/Open-Source-Support/tree/main/01%20InfoWorks%20ICM/01%20Ruby/01%20InfoWorks/0060%20-%20InfoSewer%20to%20InfoWorks%20ICM%20Conversion%20Tools" className="block p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors" target="_blank" rel="noopener noreferrer">
                <div className="flex items-start space-x-3">
                  <i className="fab fa-github text-purple-600 dark:text-purple-400 mt-1"></i>
                  <div>
                    <h5 className="font-medium text-purple-800 dark:text-purple-200">GitHub: Conversion Tools Repository</h5>
                    <p className="text-sm text-purple-600 dark:text-purple-300 mt-1">Official Innovyze conversion scripts and tools</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </Alert>

        {/* InfoSewer Project Structure */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 text-lg">
            <i className="fas fa-folder-tree mr-2"></i>
            InfoSewer Project Structure & File Organization
          </h3>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">
                  <i className="fas fa-sitemap mr-2 text-blue-500"></i>
                  Basic Files in InfoSewer
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 dark:border-gray-600 rounded-lg">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-3 py-2 text-left font-medium text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600">Each Project Contains</th>
                        <th className="px-3 py-2 text-left font-medium text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600">Project Storage Structure</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Network Map</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Network Schematic - Stored as *.MXD File</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Feature Attributes</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Database Tables and Modeling Files - Stored as *.IEDB Folder</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Modeling Parameters</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Results Directory - *.OUT Folder (post-successful Run)</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Model Solution and Results</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300"></td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Model Scenarios</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">
                  <i className="fas fa-water mr-2 text-green-500"></i>
                  Basic Files in InfoSWMM
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 dark:border-gray-600 rounded-lg">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-3 py-2 text-left font-medium text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600">Each Project Contains</th>
                        <th className="px-3 py-2 text-left font-medium text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600">Project Storage Structure</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Network Map</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Network Schematic - Stored as *.MXD File</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Feature Attributes</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Database Tables and Modeling Files - Stored as *.ISDB Folder</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Modeling Parameters</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Results Directory - *.OUT Folder (post-successful Run)</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Model Solution and Results</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300"></td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Model Scenarios</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">
                  <i className="fas fa-file-alt mr-2 text-orange-500"></i>
                  InfoSewer Scenario Files
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 dark:border-gray-600 rounded-lg">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-3 py-2 text-left font-medium text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600">File Type</th>
                        <th className="px-3 py-2 text-left font-medium text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600">File Extensions and Names</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Text Files</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300 font-mono text-xs">~SSNINP, ~DGNINP, ~EPSINP, STEADY.RPT, DESIGN.RPT, EPS.RPT</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Binary Files</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300 font-mono text-xs">STEADY.OUT, EPS.OUT</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">
                  <i className="fas fa-file-code mr-2 text-purple-500"></i>
                  InfoSWMM Scenario Files
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 dark:border-gray-600 rounded-lg">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-3 py-2 text-left font-medium text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600">File Type</th>
                        <th className="px-3 py-2 text-left font-medium text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600">File Extensions and Names</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Text Files</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300 font-mono text-xs">HYDQUA.INP, HYDQUA.RPT.TXT, HYDQUA.HTML</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Binary Files</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300 font-mono text-xs">HYDQUA.OUT</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <Alert type="info">
              <h4 className="font-semibold mb-2">Key Differences Between InfoSewer and InfoSWMM</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">InfoSewer (*.IEDB):</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Sanitary sewer collection systems</li>
                    <li>• Steady-state and extended period simulation</li>
                    <li>• Design analysis capabilities</li>
                    <li>• Multiple report files (STEADY.RPT, DESIGN.RPT, EPS.RPT)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">InfoSWMM (*.ISDB):</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Stormwater and combined sewer systems</li>
                    <li>• Dynamic rainfall-runoff modeling</li>
                    <li>• Hydrologic and hydraulic analysis</li>
                    <li>• Single comprehensive output format (HYDQUA.*)</li>
                  </ul>
                </div>
              </div>
            </Alert>
          </div>
        </div>

        {/* InfoSewer System Requirements */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 text-lg">
            <i className="fas fa-laptop mr-2"></i>
            InfoSewer System Requirements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">Minimum Requirements</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li><i className="fas fa-check text-green-500 mr-2"></i>Windows 10 or later</li>
                <li><i className="fas fa-check text-green-500 mr-2"></i>8 GB RAM minimum</li>
                <li><i className="fas fa-check text-green-500 mr-2"></i>4 GB available disk space</li>
                <li><i className="fas fa-check text-green-500 mr-2"></i>DirectX 11 compatible graphics</li>
                <li><i className="fas fa-check text-green-500 mr-2"></i>Microsoft Excel (for DBF conversion)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">Recommended</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li><i className="fas fa-star text-yellow-500 mr-2"></i>16+ GB RAM</li>
                <li><i className="fas fa-star text-yellow-500 mr-2"></i>SSD storage</li>
                <li><i className="fas fa-star text-yellow-500 mr-2"></i>Dedicated graphics card</li>
                <li><i className="fas fa-star text-yellow-500 mr-2"></i>ESRI ArcGIS (for SHP conversion)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* File Format Reference */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 text-lg">
            <i className="fas fa-file-alt mr-2"></i>
            InfoSewer File Format Reference
          </h3>
          <div className="space-y-4">
            <Alert type="warning">
              <h4 className="font-semibold mb-2">Key File Types in IEDB Folder</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-database text-blue-600 dark:text-blue-300 text-sm"></i>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-gray-100">DBF Files (dBase Database)</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">NODE.DBF, LINK.DBF, MANHOLE.DBF, PIPE.DBF, etc. - Convert to CSV for ICM import</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map text-green-600 dark:text-green-300 text-sm"></i>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-gray-100">Map.mdb (Access Database)</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Contains spatial geometry data for conversion to SHP format</div>
                  </div>
                </div>
              </div>
            </Alert>

            <CodeBlock language="text" code={`InfoSewer IEDB Folder Structure:

C:\\\\YourProject.IEDB\\\\
├── NODE.DBF           # Node data (manholes, outlets)
├── LINK.DBF           # Link data (pipes, pumps)
├── MANHOLE.DBF        # Manhole properties
├── PIPE.DBF           # Pipe hydraulics
├── PUMP.DBF           # Pump definitions
├── PUMPCTRL.DBF       # Pump controls
├── MHHYD.DBF          # Manhole hydraulics
├── WWELLHYD.DBF       # Wet well hydraulics
├── HYDROGRH.DBF       # RDII hydrographs
├── Map.mdb            # Spatial geometry
└── [Other DBF files]  # Additional data tables`} />
          </div>
        </div>

        {/* Complete CSV File Reference */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 text-lg">
            <i className="fas fa-file-csv mr-2"></i>
            Complete InfoSewer CSV File Reference
          </h3>
          
          <Alert type="info">
            <h4 className="font-semibold mb-2">Conversion Note</h4>
            <p className="text-sm">The CSV file extensions shown below are converted from DBF files for import to ICM InfoWorks. In the original IEDB folder, these files have the .DBF extension.</p>
          </Alert>

          <div className="mt-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">
                  <i className="fas fa-network-wired mr-2 text-blue-500"></i>
                  Network Elements & Core Data
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border border-gray-200 dark:border-gray-600 rounded-lg">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-2 py-1 text-left font-medium text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600">File</th>
                        <th className="px-2 py-1 text-left font-medium text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">NODE.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Node element information</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">LINK.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Link element information</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">MANHOLE.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Manhole data</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">PIPE.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Pipe element information</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">PUMP.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Pump data</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">WWELL.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Well data</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">VERTEX.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Vertex data</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">
                  <i className="fas fa-cogs mr-2 text-green-500"></i>
                  Hydraulic & Design Data
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border border-gray-200 dark:border-gray-600 rounded-lg">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-2 py-1 text-left font-medium text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600">File</th>
                        <th className="px-2 py-1 text-left font-medium text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">MHHYD.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">MH hydraulic data</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">PIPEHYD.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Pipe hydraulic data</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">PUMPHYD.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Pump hydraulic data</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">WWELLHYD.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Well hydraulic data</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">PIPEDGN.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Pipe design data</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">HYDROGRH.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Hydrographic data</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">CONTROL.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Control data</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">
                  <i className="fas fa-chart-line mr-2 text-orange-500"></i>
                  Analysis & Output Data
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border border-gray-200 dark:border-gray-600 rounded-lg">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-2 py-1 text-left font-medium text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600">File</th>
                        <th className="px-2 py-1 text-left font-medium text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">MHOUT.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">MH output data</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">PIPEOUT.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Pipe output data</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">PUMPOUT.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Pump output data</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">WWELLOUT.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Well output data</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">REPORT.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Report data</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">FORCEOUT.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Force output data</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">OUTLEOUT.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Outlet output data</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">
                  <i className="fas fa-sliders-h mr-2 text-purple-500"></i>
                  Configuration & Settings
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border border-gray-200 dark:border-gray-600 rounded-lg">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-2 py-1 text-left font-medium text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600">File</th>
                        <th className="px-2 py-1 text-left font-medium text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">SCENARIO.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Scenario data</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">RUNOPT.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Run options</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">PATTERN.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Pattern information</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">TIME.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Time settings</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">CURVE.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Curve data</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">COSTING.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Costing information</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300 font-mono">STATUS.csv</td>
                        <td className="px-2 py-1 text-gray-600 dark:text-gray-300">Status data</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <Alert type="warning">
              <h4 className="font-semibold mb-2">Additional Specialized Files</h4>
              <div className="grid md:grid-cols-3 gap-4 text-xs">
                <div>
                  <p className="font-medium mb-1">Link Types:</p>
                  <p>ALINK, CBLINK, DMLINK, HLLINK, MOLINK, XNGLINK</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Node Types:</p>
                  <p>ANODE, CBNODE, DMNODE, HLNODE, MONODE, XNGNODE</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Special Data:</p>
                  <p>ANNO, GIS, FLD, LUC, NCP files and more</p>
                </div>
              </div>
            </Alert>

            <div className="mt-6">
              <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">
                <i className="fas fa-table mr-2 text-blue-500"></i>
                Example: PIPEHYD.DBF File Structure
              </h4>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Sample data structure from InfoSewer PIPEHYD.DBF file in the IEDB folder:</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className="px-3 py-2 text-left font-medium text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600">Field</th>
                        <th className="px-3 py-2 text-left font-medium text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600">Sample Value</th>
                        <th className="px-3 py-2 text-left font-medium text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300 font-mono">ID</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">53</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Pipe identification number</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300 font-mono">FROM_INV</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">292.5</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Upstream invert elevation</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300 font-mono">TO_INV</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">291</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Downstream invert elevation</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300 font-mono">LENGTH</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">624</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Pipe length</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300 font-mono">DIAMETER</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">12</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Pipe diameter (inches)</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300 font-mono">COEFF</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">0.014</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Manning's roughness coefficient</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300 font-mono">PARALLEL</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">0</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Number of parallel pipes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                  <i className="fas fa-info-circle mr-1"></i>
                  This data structure will be converted to CSV format for import into ICM InfoWorks using ODIC configuration files.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conversion Process Overview */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 text-lg">
            <i className="fas fa-route mr-2"></i>
            Conversion Process Summary
          </h3>
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-file-export text-white"></i>
                </div>
                <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Data Export</h4>
                <p className="text-sm text-blue-600 dark:text-blue-300">Convert DBF to CSV, Map.mdb to SHP</p>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-download text-white"></i>
                </div>
                <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Data Import</h4>
                <p className="text-sm text-green-600 dark:text-green-300">Use ODIC with CFG files</p>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-cogs text-white"></i>
                </div>
                <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Data Processing</h4>
                <p className="text-sm text-purple-600 dark:text-purple-300">Run SQL scripts and validate</p>
              </div>
            </div>
          </div>
        </div>

        {/* SWMM456.com Expert Resources */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 text-lg">
            <i className="fas fa-graduation-cap mr-2"></i>
            Expert Resources from SWMM456.com
          </h3>
          
          <Alert type="success">
            <h4 className="font-semibold mb-3">About Robert Dickinson & SWMM456.com</h4>
            <div className="space-y-3 text-sm">
              <p><strong>Expert Authority:</strong> Robert Dickinson is a world-renowned urban drainage modeling authority and Product Sector Leader for InfoSWMM/InfoSewer at Autodesk (formerly Innovyze) with over 40 years of SWMM modeling experience.</p>
              <p><strong>Co-Developer:</strong> Co-developer of EPA SWMM versions 3, 4, and 5+</p>
              <p><strong>Resource Platform:</strong> SWMM456.com (formerly SWMM5.NET) provides specialized mini-blog tutorials and resources for InfoSewer, InfoSWMM, and ICM networks.</p>
            </div>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">Available Tutorial Categories</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li><i className="fas fa-check text-green-500 mr-2"></i>Database setup and project initialization</li>
                <li><i className="fas fa-check text-green-500 mr-2"></i>Configuration files for ICM InfoWorks migration</li>
                <li><i className="fas fa-check text-green-500 mr-2"></i>CSV and geodatabase import/export workflows</li>
                <li><i className="fas fa-check text-green-500 mr-2"></i>Flow splitter usage for dendritic networks</li>
                <li><i className="fas fa-check text-green-500 mr-2"></i>Force main hydraulics and pump operations</li>
                <li><i className="fas fa-check text-green-500 mr-2"></i>Ruby scripting for ICM integration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">Expert Contact Information</h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div><i className="fas fa-envelope text-blue-500 mr-2"></i>robert.dickinson@gmail.com</div>
                <div><i className="fas fa-envelope text-blue-500 mr-2"></i>robert.e.dickinson@innovyze.com</div>
                <div><i className="fas fa-globe text-green-500 mr-2"></i>SWMM456.com</div>
                <div><i className="fab fa-linkedin text-blue-600 mr-2"></i>LinkedIn Professional Network</div>
              </div>
            </div>
          </div>
        </div>

        {/* InfoSewer Database Setup Guide */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 text-lg">
            <i className="fas fa-database mr-2"></i>
            InfoSewer Database Setup & Configuration
          </h3>
          
          <div className="space-y-6">
            <Alert type="info">
              <h4 className="font-semibold mb-2">Database-Centric Architecture</h4>
              <p className="text-sm">InfoSewer uses a database-centric approach where all model data is stored in DBF (database) files within the IEDB (InfoSewer Database) folder, integrated with ArcGIS for spatial visualization.</p>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">DB Editor Functions</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li><i className="fas fa-table text-blue-500 mr-2"></i>View modeling data tables</li>
                  <li><i className="fas fa-plus text-green-500 mr-2"></i>Add/delete custom fields</li>
                  <li><i className="fas fa-edit text-orange-500 mr-2"></i>Perform block edits on multiple records</li>
                  <li><i className="fas fa-cog text-purple-500 mr-2"></i>Customize data tables with user-defined fields</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">Data Import Methods</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li><i className="fas fa-file-csv text-green-500 mr-2"></i>CSV file import with field mapping</li>
                  <li><i className="fas fa-database text-blue-500 mr-2"></i>Geodatabase import via ODIC</li>
                  <li><i className="fas fa-map text-red-500 mr-2"></i>Shapefile integration</li>
                  <li><i className="fas fa-drafting-compass text-purple-500 mr-2"></i>AutoCAD file support</li>
                </ul>
              </div>
            </div>

            <CodeBlock language="text" code={`InfoSewer Database Implementation Steps:

1. Project Creation:
   • Open ArcMap with appropriate coordinate system
   • Load background layers/shapefiles
   • Initialize new InfoSewer project

2. Database Initialization:
   • System creates IEDB folder structure
   • Default tables populated with standard fields
   • Spatial reference system established

3. Data Population:
   • Import existing network data (CSV/Geodatabase)
   • Manual data entry through attribute browsers
   • Bulk data updates via DB Editor

4. Configuration Optimization:
   • Set display scopes and domains
   • Configure custom fields for project needs
   • Establish data validation rules

5. Network Validation:
   • Run "Update Map from DB" to sync database with map
   • Perform connectivity checks
   • Validate hydraulic parameters`} />
          </div>
        </div>

        {/* Professional Training Information */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 text-lg">
            <i className="fas fa-chalkboard-teacher mr-2"></i>
            Professional Training Resources
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Alert type="warning">
                <h4 className="font-semibold mb-2">Official Innovyze Training</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>"Introduction to InfoSewer (US)"</strong></p>
                  <p>• 2-day comprehensive web-based training</p>
                  <p>• Hands-on modeling and database customization</p>
                  <p>• GIS integration techniques</p>
                  <p>• Steady-state and dynamic simulation methods</p>
                  <p>• Wet well cycling and pump optimization</p>
                </div>
              </Alert>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">Design Capabilities Covered</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li><i className="fas fa-water text-blue-500 mr-2"></i>Peak discharge conveyance analysis</li>
                <li><i className="fas fa-cube text-brown-500 mr-2"></i>Solids transport optimization</li>
                <li><i className="fas fa-chart-line text-green-500 mr-2"></i>Capacity analysis for existing systems</li>
                <li><i className="fas fa-tools text-orange-500 mr-2"></i>Replacement and parallel pipe design</li>
                <li><i className="fas fa-tachometer-alt text-purple-500 mr-2"></i>Velocity and cover depth criteria compliance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Advanced Features & Integration */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 text-lg">
            <i className="fas fa-rocket mr-2"></i>
            Advanced Features & Integration
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-layer-group text-white"></i>
              </div>
              <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Multi-Level Inheritance</h4>
              <p className="text-sm text-blue-600 dark:text-blue-300">Scenario Manager for alternative analysis with hierarchical data inheritance</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-shield-alt text-white"></i>
              </div>
              <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Quality Assurance</h4>
              <p className="text-sm text-green-600 dark:text-green-300">Built-in validation routines and mass balance verification tools</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-exchange-alt text-white"></i>
              </div>
              <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Integration</h4>
              <p className="text-sm text-purple-600 dark:text-purple-300">GIS Gateway for spatial data exchange and ICM InfoWorks conversion</p>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="flex justify-center">
          <button 
            onClick={() => showStep('step1')}
            className="gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <i className="fas fa-arrow-right mr-2"></i>
            Begin Conversion Process
          </button>
        </div>
      </div>
    </div>
  );
}

function OverviewContent({ showStep }: { showStep: (step: string) => void }) {
  return (
    <div className="animate-fade-in">
      <div className="gradient-primary text-white min-h-[60vh] flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 w-full">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2">InfoSewer to InfoWorks ICM</h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 leading-relaxed px-2">Knowledge Management Conversion Guide</p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
              <div className="glass-effect px-4 sm:px-6 py-3 rounded-full backdrop-blur-md">
                <i className="fas fa-clock mr-2 text-sm sm:text-base"></i>
                <span className="text-sm sm:text-base">~2-4 hours</span>
              </div>
              <div className="glass-effect px-4 sm:px-6 py-3 rounded-full backdrop-blur-md">
                <i className="fas fa-layer-group mr-2 text-sm sm:text-base"></i>
                <span className="text-sm sm:text-base">9 Steps</span>
              </div>
              <div className="glass-effect px-4 sm:px-6 py-3 rounded-full backdrop-blur-md">
                <i className="fas fa-users mr-2 text-sm sm:text-base"></i>
                <span className="text-sm sm:text-base">Expert Level</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Requirements Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8 text-center sm:text-left">Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="step-card bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-secondary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <i className="fas fa-desktop text-white text-sm sm:text-base"></i>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2 text-base sm:text-lg">Software</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                <li>• InfoWorks ICM</li>
                <li>• Microsoft Excel</li>
                <li>• Ruby interpreter</li>
              </ul>
            </div>

            <div className="step-card bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-secondary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <i className="fas fa-database text-white text-sm sm:text-base"></i>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2 text-base sm:text-lg">Data Access</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                <li>• InfoSewer IEDB folder</li>
                <li>• DBF database files</li>
                <li>• Spatial geometry data</li>
              </ul>
            </div>

            <div className="step-card bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-secondary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <i className="fas fa-user-graduate text-white text-sm sm:text-base"></i>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2 text-base sm:text-lg">Expertise</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                <li>• InfoSewer experience</li>
                <li>• ICM basic knowledge</li>
                <li>• Database concepts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process Overview */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8 text-center sm:text-left">Conversion Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="fas fa-file-export text-white text-xl sm:text-2xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">1. Export</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Convert InfoSewer data to compatible formats (DBF to CSV, MDB to SHP)</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="fas fa-download text-white text-xl sm:text-2xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">2. Import</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Use InfoWorks ICM ODIC with configuration files to import data systematically</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="fas fa-cogs text-white text-xl sm:text-2xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">3. Configure</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Run SQL scripts and validate data integrity to complete the conversion</p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <Alert type="warning">
          <h4 className="font-semibold mb-2 text-sm sm:text-base">Important Notice</h4>
          <p className="text-sm sm:text-base leading-relaxed">This conversion process requires professional software licenses and technical expertise. Always backup your original data before beginning the conversion process.</p>
        </Alert>

        {/* Getting Started */}
        <div className="text-center mb-8 sm:mb-12">
          <button 
            onClick={() => showStep('step1')}
            className="gradient-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto max-w-sm"
          >
            <i className="fas fa-arrow-right mr-2"></i>
            Start Conversion Process
          </button>
        </div>

        {/* Official Documentation Reference */}
        <div className="mt-8 sm:mt-12">
          <Alert type="info">
            <h4 className="font-semibold mb-3 text-sm sm:text-base"><i className="fas fa-book mr-2"></i>Official Autodesk Documentation - Overview</h4>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 mb-3"><strong>Importing InfoSewer to InfoWorks ICM - Overview of Import Steps</strong></p>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                <p><strong>Issue:</strong> Converting hydraulic models from one program to another requires a degree of dedication due to the intricacies involved in the process. It requires a certain investment of time and an understanding of both programs.</p>
                
                <p><strong>Solution:</strong> The process involves nine steps to import and configure data from InfoSewer to the format required by InfoWorks ICM. At a high level, the steps include:</p>
                
                <ul className="list-disc list-inside ml-2 sm:ml-4 space-y-1 text-xs sm:text-sm">
                  <li><strong>Converting DBF Files to CSV:</strong> Use an Excel macro to convert DBF files within the .IEDB model folder to CSV format for importing network data into ICM.</li>
                  <li><strong>Converting Map.mdb to SHP:</strong> Use ESRI's ArcCatalog to convert the Map.mdb file within the .IEDB model folder to SHP format for importing network geometry into ICM.</li>
                  <li><strong>Importing CSV Files:</strong> Import network data from CSV files with configuration (CFG) files.</li>
                  <li><strong>Importing SHP Files:</strong> Import geometry data from SHP files with configuration (CFG) files.</li>
                  <li><strong>Performing Data Manipulation:</strong> Modify imported data using SQL.</li>
                </ul>

                <p><strong>Nine Conversion Steps:</strong></p>
                <ol className="list-decimal list-inside ml-2 sm:ml-4 space-y-1 text-xs sm:text-sm">
                  <li>Import Nodes and Create Subcatchments</li>
                  <li>Import Links</li>
                  <li>Import Manhole Hydraulics</li>
                  <li>Import Link Hydraulics</li>
                  <li>Import Pump Hydraulics</li>
                  <li>Import Pump Controls</li>
                  <li>Import Subcatchment DWF</li>
                  <li>Import Wet Well Hydraulics</li>
                  <li>Configuration for Rainfall-Dependent Infiltration and Inflow (RDII) hydrographs</li>
                </ol>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 sm:mt-3 border-t border-gray-200 dark:border-gray-600 pt-2">
                Source: <a href="https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/Knowledge-Importing-InfoSewer-to-InfoWorks-ICM-Overview-of-all-Import-Steps.html" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">Official Autodesk Documentation</a>
              </p>
              <div className="mt-3 sm:mt-4">
                <h5 className="text-xs font-semibold text-gray-600 dark:text-gray-300 mb-2">Source Material:</h5>
                <CodeBlock language="text" code={`Importing InfoSewer to InfoWorks ICM - Overview of Import Steps

Issue:
Converting hydraulic models from one program to another requires a degree of dedication due to the intricacies involved in the process. It requires a certain investment of time and an understanding of both programs. This series of articles contains step-by-step instructions to perform a basic conversion for the BASE scenario from InfoSewer to InfoWorks ICM.

Please be aware that this guide is not exhaustive. The unique setup of each InfoSewer model means a one-size-fits-all approach to conversion is impractical. However, these steps have been carefully planned to facilitate the conversion process for as many models as possible.

Solution:
Several scripts are utilized to perform the conversion from InfoSewer to InfoWorks ICM. The required files are available within the Innovyze GitHub repository:
01 InfoWorks ICM/01 Ruby/01 InfoWorks/0060 - InfoSewer to InfoWorks ICM Conversion Tools

The process involves nine steps to import and configure data from InfoSewer to the format required by InfoWorks ICM. At a high level, the steps include:

- Converting DBF Files to CSV: Use an Excel macro to convert DBF files within the .IEDB model folder to CSV format for importing network data into ICM.
- Converting Map.mdb to SHP: Use ESRI's ArcCatalog to convert the Map.mdb file within the .IEDB model folder to SHP format for importing network geometry into ICM.
- Importing CSV Files: Import network data from CSV files with configuration (CFG) files.
- Importing SHP Files: Import geometry data from SHP files with configuration (CFG) files.
- Performing Data Manipulation: Modify imported data using SQL.

Nine Conversion Steps:
1. Import Nodes and Create Subcatchments
2. Import Links
3. Import Manhole Hydraulics
4. Import Link Hydraulics
5. Import Pump Hydraulics
6. Import Pump Controls
7. Import Subcatchment DWF
8. Import Wet Well Hydraulics
9. Configuration for Rainfall-Dependent Infiltration and Inflow (RDII) hydrographs

A companion Ruby script was developed to combine the nine steps into a single script. This Ruby script requires the following inputs:
- Folder containing converted SHP files from Map.mdb
- Folder containing converted CSV files from .IEDB
- Folder containing CFG files

Important: Verify that display units are set as desired prior to import. To review units in ICM, go to Tools > Options and view the Units tab. Display units can be modified as necessary.`} />
              </div>
            </div>
          </Alert>
        </div>

        {/* App Source Code & Documentation */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8 text-center sm:text-left">
            <i className="fas fa-code mr-2"></i>
            Application Architecture & Source Code
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Technology Stack */}
            <div className="space-y-6">
              <Alert type="success">
                <h4 className="font-semibold mb-3 text-sm sm:text-base">
                  <i className="fas fa-layer-group mr-2"></i>
                  Technology Stack
                </h4>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-xs sm:text-sm font-medium">React 18</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <span className="text-xs sm:text-sm font-medium">TypeScript</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                      <span className="text-xs sm:text-sm font-medium">Tailwind CSS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-xs sm:text-sm font-medium">Node.js</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-xs sm:text-sm font-medium">Vite</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-xs sm:text-sm font-medium">Express</span>
                    </div>
                  </div>
                </div>
              </Alert>

              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 text-base sm:text-lg">
                  <i className="fas fa-folder-tree mr-2"></i>
                  Project Structure
                </h3>
                <CodeBlock language="text" code={`src/
├── components/           # UI Components
│   ├── theme-selector.tsx
│   ├── sidebar.tsx
│   ├── step-content.tsx
│   ├── alert.tsx
│   └── code-block.tsx
├── hooks/               # Custom Hooks
│   ├── use-theme.tsx
│   ├── use-conversion-progress.tsx
│   └── use-mobile.tsx
├── pages/               # Route Components
│   └── conversion-guide.tsx
└── lib/                 # Utilities
    └── queryClient.ts

server/                  # Backend API
├── index.ts            # Express server
└── routes.ts           # API endpoints

shared/                  # Shared types
└── schema.ts           # Data schemas`} />
              </div>
            </div>

            {/* Key Features & Architecture */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 text-base sm:text-lg">
                  <i className="fas fa-star mr-2"></i>
                  Key Features
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  <li><i className="fas fa-check text-green-500 mr-2"></i>8 customizable themes with dark mode</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i>Mobile-first responsive design</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i>Progress tracking with localStorage</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i>Keyboard navigation support</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i>Interactive step-by-step guide</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i>Official documentation integration</li>
                </ul>
              </div>

              <Alert type="info">
                <h4 className="font-semibold mb-3 text-sm sm:text-base">
                  <i className="fas fa-palette mr-2"></i>
                  Theme System
                </h4>
                <p className="text-xs sm:text-sm mb-3">Dynamic theme switching with persistent storage:</p>
                <CodeBlock language="typescript" code={`// Theme Hook Usage
const { currentTheme, setTheme, isDarkMode, toggleDarkMode } = useTheme();

// Available Themes
const themes = {
  ocean: 'Ocean Blue',
  sunset: 'Sunset Orange',
  forest: 'Forest Green',
  lavender: 'Lavender Purple',
  corporate: 'Corporate Gray',
  midnight: 'Midnight Blue',
  autumn: 'Autumn Warmth',
  arctic: 'Arctic Teal'
};`} />
              </Alert>
            </div>
          </div>

          {/* Component Examples */}
          <div className="mt-6 sm:mt-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 sm:mb-6">
              <i className="fas fa-puzzle-piece mr-2"></i>
              Core Components
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3 text-sm sm:text-base">
                  <i className="fas fa-cogs mr-2"></i>
                  Progress Hook
                </h4>
                <CodeBlock language="typescript" code={`// Conversion Progress Management
const useConversionProgress = () => {
  const [currentStep, setCurrentStep] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const showStep = (step: string) => {
    setCurrentStep(step);
    localStorage.setItem('icm-converter-progress', step);
  };

  const getProgressPercentage = () => {
    const stepIndex = steps.indexOf(currentStep);
    return Math.round((stepIndex / (steps.length - 1)) * 100);
  };

  return { currentStep, showStep, getProgressPercentage };
};`} />
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3 text-sm sm:text-base">
                  <i className="fas fa-mobile-alt mr-2"></i>
                  Responsive Design
                </h4>
                <CodeBlock language="typescript" code={`// Mobile Detection Hook
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};`} />
              </div>
            </div>
          </div>

          {/* Development Info */}
          <div className="mt-6 sm:mt-8">
            <Alert type="warning">
              <h4 className="font-semibold mb-3 text-sm sm:text-base">
                <i className="fas fa-tools mr-2"></i>
                Development Environment
              </h4>
              <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <p className="font-medium mb-2">Build Tools:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Vite for fast development</li>
                    <li>• TypeScript for type safety</li>
                    <li>• ESLint for code quality</li>
                    <li>• Tailwind CSS for styling</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Features:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Hot Module Replacement</li>
                    <li>• Path aliases (@/components)</li>
                    <li>• Error overlay for debugging</li>
                    <li>• Production optimizations</li>
                  </ul>
                </div>
              </div>
            </Alert>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step1Content({ showStep }: { showStep: (step: string) => void }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
            <i className="fas fa-download text-white"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Step 1: Import Nodes and Create Subcatchments</h1>
            <p className="text-gray-600">Convert DBF files to CSV and import node data using ODIC</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Alert type="info">
            <h4 className="font-semibold mb-2">Official GitHub Repository</h4>
            <p>Access the official Innovyze conversion tools from the GitHub repository:</p>
            <div className="mt-3 space-y-2">
              <a href="https://github.com/innovyze/Open-Source-Support/tree/main/01%20InfoWorks%20ICM/01%20Ruby/01%20InfoWorks/0060%20-%20InfoSewer%20to%20InfoWorks%20ICM%20Conversion%20Tools" className="block text-blue-600 hover:text-blue-800 underline text-sm" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github mr-2"></i>
                InfoSewer to InfoWorks ICM Conversion Tools
              </a>
              <a href="https://download-directory.github.io/?url=https%3A%2F%2Fgithub.com%2Finnovyze%2FOpen-Source-Support%2Ftree%2Fmain%2F01%2520InfoWorks%2520ICM%2F01%2520Ruby%2F01%2520InfoWorks%2F0060%2520-%2520InfoSewer%2520to%2520InfoWorks%2520ICM%2520Conversion%2520Tools" className="block text-green-600 hover:text-green-800 underline text-sm" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-download mr-2"></i>
                Direct Download Link
              </a>
            </div>
          </Alert>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-gray-800 mb-4">Required Files Location</h3>
            <CodeBlock language="bash" code={`Repository Structure:
01 InfoWorks ICM/
├── 01 Ruby/
│   └── 01 InfoWorks/
│       └── 0060 - InfoSewer to InfoWorks ICM Conversion Tools/
│           ├── Configuration (CFG) Files/
│           ├── DBF to CSV Macro/
│           │   └── DBF_to_CSV.xlsm
│           ├── Ruby Import BASE/
│           │   └── InfoSewer_to_InfoWorks_BASE.rb
│           ├── SQL Scripts/
│           ├── Scenario Tools/
│           ├── Pattern Tools/
│           └── readme.md

Official Documentation:
https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/Knowledge-Importing-InfoSewer-to-InfoWorks-ICM-Overview-of-all-Import-Steps.html`} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Step2Content({ showStep }: { showStep: (step: string) => void }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
            <i className="fas fa-database text-white"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Step 2: Export InfoSewer Database</h1>
            <p className="text-gray-600">Extract data from InfoSewer IEDB folder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step3Content({ showStep }: { showStep: (step: string) => void }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
            <i className="fas fa-water text-white"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Step 3: Import Manhole Hydraulics</h1>
            <p className="text-gray-600">Configure manhole hydraulic properties</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step4Content({ showStep }: { showStep: (step: string) => void }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
            <i className="fas fa-pipe text-white"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Step 4: Import Link Hydraulics</h1>
            <p className="text-gray-600">Configure pipe and link hydraulic properties</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step5Content({ showStep }: { showStep: (step: string) => void }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
            <i className="fas fa-pump-soap text-white"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Step 5: Import Pump Hydraulics</h1>
            <p className="text-gray-600">Configure pump hydraulic characteristics</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step6Content({ showStep }: { showStep: (step: string) => void }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
            <i className="fas fa-cogs text-white"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Step 6: Import Pump Controls</h1>
            <p className="text-gray-600">Set up pump control logic and automation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step7Content({ showStep }: { showStep: (step: string) => void }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
            <i className="fas fa-tint text-white"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Step 7: Import Subcatchment DWF</h1>
            <p className="text-gray-600">Configure dry weather flow patterns</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step8Content({ showStep }: { showStep: (step: string) => void }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
            <i className="fas fa-flask text-white"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Step 8: Import Wet Well Hydraulics</h1>
            <p className="text-gray-600">Configure wet well hydraulic parameters</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step9Content({ showStep }: { showStep: (step: string) => void }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
            <i className="fas fa-cloud-rain text-white"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Step 9: Configure RDII Hydrographs</h1>
            <p className="text-gray-600">Set up rainfall-dependent infiltration and inflow</p>
          </div>
        </div>
      </div>
    </div>
  );
}