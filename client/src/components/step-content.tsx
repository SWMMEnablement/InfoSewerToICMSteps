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

        {/* InfoSewer Hydraulic Modeling Procedures */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 text-lg">
            <i className="fas fa-calculator mr-2"></i>
            InfoSewer Hydraulic Modeling Procedures
          </h3>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">
                  <i className="fas fa-chart-line mr-2 text-blue-500"></i>
                  Steady State Analysis Features
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li><i className="fas fa-check text-green-500 mr-2"></i>Constant flow conditions at specific time points</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i>Peak flow scenarios and capacity assessment</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i>Transition between gravity and pressurized flow</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i>One-dimensional incompressible flow calculations</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i>Rational Method for stormwater peak flows</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i>IDF curves for return period analysis</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">
                  <i className="fas fa-drafting-compass mr-2 text-green-500"></i>
                  Network Design Capabilities
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li><i className="fas fa-check text-green-500 mr-2"></i>Explicit design method for independent pipe sizing</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i>Pipe size and slope determination for given flows</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i>Velocity and cover depth optimization</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i>Existing system capacity analysis</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i>Replacement and parallel pipe design</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i>Cost minimization with design criteria</li>
                </ul>
              </div>
            </div>

            <Alert type="info">
              <h4 className="font-semibold mb-2">Design Criteria & Constraints</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">Velocity Requirements:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Minimum velocity ≥2 ft/s (prevent deposition)</li>
                    <li>• Maximum velocity ≤10 ft/s (prevent scour)</li>
                    <li>• User-specified limits based on system needs</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Analysis Types:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Analysis criteria: Existing pipe capacity</li>
                    <li>• Design criteria: New pipe sizing</li>
                    <li>• d/D ratios trigger design recommendations</li>
                  </ul>
                </div>
              </div>
            </Alert>
          </div>
        </div>

        {/* Force Main & Pump Station Design */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 text-lg">
            <i className="fas fa-pump-soap mr-2"></i>
            Force Main Modeling & Pump Station Design
          </h3>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">
                  <i className="fas fa-flask mr-2 text-blue-500"></i>
                  System Components
                </h4>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                  <ol className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li><strong>1. Wet Well:</strong> Basin collecting wastewater inflow</li>
                    <li><strong>2. Pump:</strong> Device providing hydraulic head to fluid</li>
                    <li><strong>3. Pump Curve:</strong> Head-flow relationship defining performance</li>
                    <li><strong>4. Pressure Node:</strong> Measurement point after pump</li>
                    <li><strong>5. Force Main:</strong> Pressurized pipe carrying wastewater</li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">
                  <i className="fas fa-cogs mr-2 text-green-500"></i>
                  Wet Well Analysis Options
                </h4>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                    <strong>Constant Diameter (Cylindrical):</strong><br/>
                    Representative diameter = average wet-well area diameter
                  </div>
                  <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded">
                    <strong>Variable Cross-Section:</strong><br/>
                    Uses curve/shape table defining volume vs depth relationship
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="fas fa-square text-white text-sm"></i>
                </div>
                <h5 className="font-medium text-orange-800 dark:text-orange-200 mb-1">Fixed Capacity</h5>
                <p className="text-xs text-orange-600 dark:text-orange-300">Constant flow rate independent of head</p>
              </div>
              
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="fas fa-dot-circle text-white text-sm"></i>
                </div>
                <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-1">Single-Point</h5>
                <p className="text-xs text-purple-600 dark:text-purple-300">Single head-flow design point</p>
              </div>
              
              <div className="text-center p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="fas fa-chart-line text-white text-sm"></i>
                </div>
                <h5 className="font-medium text-cyan-800 dark:text-cyan-200 mb-1">Three-Point</h5>
                <p className="text-xs text-cyan-600 dark:text-cyan-300">Most accurate pump representation</p>
              </div>
            </div>

            <Alert type="warning">
              <h4 className="font-semibold mb-2">Force Main Requirements</h4>
              <div className="text-sm space-y-2">
                <p><strong>Hydraulic Configuration:</strong> Must be defined as pressurized conduits with Hazen-Williams or Darcy-Weisbach coefficients</p>
                <p><strong>System Rules:</strong> Gravity main → Wet well → Pump → Chamber/manhole → Force main</p>
                <p><strong>Advanced Requirements:</strong> Each force main system requires dedicated wet well/pump combination</p>
              </div>
            </Alert>
          </div>
        </div>

        {/* ArcGIS Integration Workflow */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 text-lg">
            <i className="fas fa-map mr-2"></i>
            ArcGIS Integration Workflow
          </h3>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">
                  <i className="fas fa-download mr-2 text-blue-500"></i>
                  Data Import Methods
                </h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="p-2 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20">
                    <strong>InfoSewer Import Manager:</strong> Shapefiles, text files, MapInfo (MIF/MID)
                  </div>
                  <div className="p-2 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20">
                    <strong>GIS Gateway Integration:</strong> Create model, add layers, coordinate matching
                  </div>
                  <div className="p-2 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20">
                    <strong>Database Connections:</strong> ODBC, OLE DB, direct CSV import
                  </div>
                  <div className="p-2 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20">
                    <strong>Legacy Systems:</strong> H2OMAP projects, ArcInfo generate files
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">
                  <i className="fas fa-upload mr-2 text-green-500"></i>
                  Data Export Options
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li><i className="fas fa-check text-green-500 mr-2"></i>Collection system maps with InfoSewer data</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i>Input data and simulation outputs</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i>ArcInfo generate files for geometry exchange</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i>Windows Clipboard export</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i>Database integration with spreadsheets/CAD</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i>Bidirectional GIS Exchange tool updates</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-3">
                <i className="fas fa-chart-area mr-2 text-purple-500"></i>
                Spatial Analysis Integration
              </h4>
              <div className="grid md:grid-cols-4 gap-3">
                <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <i className="fas fa-search text-blue-600 dark:text-blue-400 text-lg mb-2"></i>
                  <h5 className="font-medium text-blue-800 dark:text-blue-200 text-sm">Extract Tools</h5>
                  <p className="text-xs text-blue-600 dark:text-blue-300">SQL queries, spatial criteria</p>
                </div>
                
                <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <i className="fas fa-layer-group text-green-600 dark:text-green-400 text-lg mb-2"></i>
                  <h5 className="font-medium text-green-800 dark:text-green-200 text-sm">Overlay Tools</h5>
                  <p className="text-xs text-green-600 dark:text-green-300">Clip, intersect, union</p>
                </div>
                
                <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <i className="fas fa-crosshairs text-orange-600 dark:text-orange-400 text-lg mb-2"></i>
                  <h5 className="font-medium text-orange-800 dark:text-orange-200 text-sm">Proximity</h5>
                  <p className="text-xs text-orange-600 dark:text-orange-300">Buffer, near, distance</p>
                </div>
                
                <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <i className="fas fa-chart-bar text-purple-600 dark:text-purple-400 text-lg mb-2"></i>
                  <h5 className="font-medium text-purple-800 dark:text-purple-200 text-sm">Statistics</h5>
                  <p className="text-xs text-purple-600 dark:text-purple-300">Spatial patterns, analysis</p>
                </div>
              </div>
            </div>

            <Alert type="success">
              <h4 className="font-semibold mb-2">Quality Control Best Practices</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">Pre-Import Validation:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• All conduits connect to exactly two unique nodes</li>
                    <li>• Proper snapping at connection points</li>
                    <li>• No disconnected/orphan nodes</li>
                    <li>• Coordinate system matching</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Post-Import Checks:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Use Orphan Nodes utility</li>
                    <li>• Run Orphan Pipes check</li>
                    <li>• Verify coordinate alignment</li>
                    <li>• Test model connectivity</li>
                  </ul>
                </div>
              </div>
            </Alert>
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
      <div className="gradient-primary text-white py-8 flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 w-full">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight px-2">InfoSewer to InfoWorks ICM</h1>
            <p className="text-base sm:text-lg mb-4 opacity-90 leading-relaxed px-2">Knowledge Management Conversion Guide</p>
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
              <div className="glass-effect px-4 sm:px-6 py-3 rounded-full backdrop-blur-md">
                <i className="fas fa-calendar-alt mr-2 text-sm sm:text-base"></i>
                <span className="text-sm sm:text-base">Last Updated: February 11, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {/* Recommended: New InfoSewer Import Tool (Nov 2025) */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-500 dark:border-green-400 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg text-xs font-bold uppercase tracking-wider">Preferred Method</div>
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <i className="fas fa-magic text-white text-xl"></i>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-green-800 dark:text-green-200 mb-2">InfoSewer Import Tool (Nov 2025)</h2>
                <p className="text-green-700 dark:text-green-300 text-sm sm:text-base">A completely refreshed Ruby script (<code className="bg-green-100 dark:bg-green-800 px-1 rounded text-xs">InfoSewer_Import_UI.rb</code>) that replaces the previous multi-step workflow with a single, streamlined process including multi-scenario support.</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-green-200 dark:border-green-700 mb-6">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3 text-sm sm:text-base">
                <i className="fas fa-exchange-alt text-green-500 mr-2"></i>
                Key Improvements Over Previous Workflow
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <th className="px-3 py-2 text-left font-medium text-gray-500 dark:text-gray-400">Previous Workflow (Oct 2024)</th>
                      <th className="px-3 py-2 text-left font-medium text-green-700 dark:text-green-300">New Tool (Nov 2025)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="px-3 py-2 text-gray-500 dark:text-gray-400">Manual DBF to CSV conversion in Excel</td>
                      <td className="px-3 py-2 text-green-700 dark:text-green-300"><i className="fas fa-check text-green-500 mr-1"></i>Direct DBF reading (no Excel needed)</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="px-3 py-2 text-gray-500 dark:text-gray-400">Manual shapefile export via ArcCatalog</td>
                      <td className="px-3 py-2 text-green-700 dark:text-green-300"><i className="fas fa-check text-green-500 mr-1"></i>Direct geometry import from DBF files</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="px-3 py-2 text-gray-500 dark:text-gray-400">Run 4 separate scenario import scripts</td>
                      <td className="px-3 py-2 text-green-700 dark:text-green-300"><i className="fas fa-check text-green-500 mr-1"></i>Multi-scenario import built-in</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="px-3 py-2 text-gray-500 dark:text-gray-400">Track which scenarios to create</td>
                      <td className="px-3 py-2 text-green-700 dark:text-green-300"><i className="fas fa-check text-green-500 mr-1"></i>Interactive scenario selection dialog</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-gray-500 dark:text-gray-400">Multiple manual steps, slow</td>
                      <td className="px-3 py-2 text-green-700 dark:text-green-300"><i className="fas fa-check text-green-500 mr-1"></i>Significantly faster</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-green-200 dark:border-green-700">
                <div className="flex items-center space-x-2 mb-2">
                  <i className="fas fa-bolt text-yellow-500"></i>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 text-sm">No Pre-Conversion Needed</h4>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300">Reads DBF files directly from the .IEDB folder. No Excel macro or ArcCatalog export required.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-green-200 dark:border-green-700">
                <div className="flex items-center space-x-2 mb-2">
                  <i className="fas fa-layer-group text-blue-500"></i>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 text-sm">Multi-Scenario Support</h4>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300">Interactive dialog to select which scenarios to import, with automatic parent inheritance handling.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-green-200 dark:border-green-700">
                <div className="flex items-center space-x-2 mb-2">
                  <i className="fas fa-shield-alt text-green-500"></i>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 text-sm">Built-In Data Quality</h4>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300">Auto-fixes invalid links, case mismatches, non-compliant IDs, and conduit length issues with detailed reporting.</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-sm border border-green-200 dark:border-green-700 mb-6">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3 text-sm sm:text-base">
                <i className="fas fa-play-circle text-green-500 mr-2"></i>
                Quick Start
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 text-green-700 dark:text-green-300 font-bold text-sm">1</div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-100 text-sm">Download the tool</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Save <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">InfoSewer_Import_UI.rb</code>, the <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">lib/</code> folder, and the <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">import_config/</code> folder to the same location</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 text-green-700 dark:text-green-300 font-bold text-sm">2</div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-100 text-sm">Create a new blank InfoWorks Network</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Right-click Model Group &rarr; New InfoWorks &rarr; <strong>InfoWorks Network</strong> (yellow icon). <span className="text-red-500 font-medium">NOT</span> SWMM network (blue icon).</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 text-green-700 dark:text-green-300 font-bold text-sm">3</div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-100 text-sm">Network &rarr; Run Ruby Script</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Select <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">InfoSewer_Import_UI.rb</code></p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 text-green-700 dark:text-green-300 font-bold text-sm">4</div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-100 text-sm">Follow the dialogs</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Choose your <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">.IEDB</code> folder, select Import Configuration folder, choose scenarios, and confirm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-sm border border-green-200 dark:border-green-700 mb-6">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3 text-sm sm:text-base">
                <i className="fas fa-check-double text-green-500 mr-2"></i>
                What Gets Imported Automatically
              </h4>
              <div className="grid md:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                <ul className="space-y-1">
                  <li><i className="fas fa-check text-green-500 mr-1"></i>Complete BASE network geometry (nodes, links, vertices)</li>
                  <li><i className="fas fa-check text-green-500 mr-1"></i>All node and link properties</li>
                  <li><i className="fas fa-check text-green-500 mr-1"></i>Subcatchments for all manholes</li>
                  <li><i className="fas fa-check text-green-500 mr-1"></i>Pumps with curves and control levels</li>
                  <li><i className="fas fa-check text-green-500 mr-1"></i>Node types (Manhole, WetWell, Outfall, Break)</li>
                </ul>
                <ul className="space-y-1">
                  <li><i className="fas fa-check text-green-500 mr-1"></i>Multiple scenarios with scenario-specific data</li>
                  <li><i className="fas fa-check text-green-500 mr-1"></i>Scenario parent inheritance</li>
                  <li><i className="fas fa-check text-green-500 mr-1"></i>Selection lists (AN_Root, AN_*, QS_*, SS_*)</li>
                  <li><i className="fas fa-check text-green-500 mr-1"></i>Post-import SQL transformations</li>
                  <li><i className="fas fa-check text-green-500 mr-1"></i>Data quality fixes with console reporting</li>
                </ul>
              </div>
            </div>

            <Alert type="warning">
              <h4 className="font-semibold mb-2 text-sm">Requires Manual Review After Import</h4>
              <ul className="text-xs sm:text-sm space-y-1">
                <li><i className="fas fa-exclamation-triangle text-yellow-500 mr-2"></i><strong>Wetwell curves:</strong> If your model uses wetwell CURVES (not fixed diameter), manually set chamber_area and shaft_area in ICM</li>
                <li><i className="fas fa-exclamation-triangle text-yellow-500 mr-2"></i><strong>Inactive elements:</strong> Selection lists identify active elements, but inactive ones remain. Delete manually if needed.</li>
                <li><i className="fas fa-exclamation-triangle text-yellow-500 mr-2"></i><strong>FAC_TYPE 3 &amp; 4 scenarios:</strong> Intelli-Selection and Inherited facility types not yet supported</li>
              </ul>
            </Alert>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a href="https://github.com/innovyze/Open-Source-Support/tree/main/01%20InfoWorks%20ICM/01%20Ruby/01%20InfoWorks/0060%20-%20InfoSewer%20to%20InfoWorks%20ICM%20Conversion%20Tools" className="inline-flex items-center justify-center gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 text-sm sm:text-base" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github mr-2"></i>
                Download from GitHub
              </a>
              <a href="https://download-directory.github.io/?url=https%3A%2F%2Fgithub.com%2Finnovyze%2FOpen-Source-Support%2Ftree%2Fmain%2F01%2520InfoWorks%2520ICM%2F01%2520Ruby%2F01%2520InfoWorks%2F0060%2520-%2520InfoSewer%2520to%2520InfoWorks%2520ICM%2520Conversion%2520Tools" className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 text-sm sm:text-base" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-download mr-2"></i>
                Direct Download (ZIP)
              </a>
            </div>
          </div>
        </div>

        {/* Required Files */}
        <div className="mb-8 sm:mb-12">
          <Alert type="info">
            <h4 className="font-semibold mb-3 text-sm sm:text-base">
              <i className="fas fa-folder-open mr-2"></i>
              Required Files for the New Import Tool
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start space-x-2">
                <i className="fas fa-file-code text-green-500 mt-1"></i>
                <div>
                  <p className="font-medium">InfoSewer_Import_UI.rb</p>
                  <p className="text-xs opacity-80">Main script - run this in ICM</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <i className="fas fa-folder text-blue-500 mt-1"></i>
                <div>
                  <p className="font-medium">lib/ folder</p>
                  <p className="text-xs opacity-80">Required helper modules for DBF reading and import</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <i className="fas fa-folder text-purple-500 mt-1"></i>
                <div>
                  <p className="font-medium">import_config/ folder</p>
                  <p className="text-xs opacity-80">JSON configuration files for conversion settings</p>
                </div>
              </div>
            </div>
          </Alert>
        </div>

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

        {/* Important Notice */}
        <Alert type="warning">
          <h4 className="font-semibold mb-2 text-sm sm:text-base">Important Notice</h4>
          <p className="text-sm sm:text-base leading-relaxed">This conversion process requires professional software licenses and technical expertise. Always backup your original data before beginning the conversion process. Verify that display units are set as desired prior to import (Tools &gt; Options &gt; Units tab in ICM).</p>
        </Alert>

        {/* Alternate Historical Methods */}
        <div className="mb-8 sm:mb-12 mt-8 sm:mt-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gray-400 dark:bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <i className="fas fa-history text-white text-sm"></i>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-gray-300">Alternate Historical Import Methods</h2>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Previous approaches to InfoSewer conversion - now superseded by the new Import Tool above</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Historical Method A: Original Ruby Script */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-700 rounded-xl p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide">Archived</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Oct 2024</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2 text-base sm:text-lg">
                <i className="fas fa-gem text-amber-500 mr-2"></i>
                Original Ruby Script (InfoSewer_to_InfoWorks_BASE.rb)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3">A companion Ruby script that combined the nine manual ODIC import steps into a single script execution. Required pre-converted CSV and SHP files as inputs.</p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-amber-200 dark:border-amber-700 mb-3">
                <p className="text-xs font-medium text-gray-700 dark:text-gray-200 mb-2">This method required:</p>
                <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                  <li><i className="fas fa-times text-red-400 mr-1"></i>Manual DBF to CSV conversion via Excel macro (DBF_to_CSV.xlsm)</li>
                  <li><i className="fas fa-times text-red-400 mr-1"></i>Manual Map.mdb to SHP export via ESRI ArcCatalog</li>
                  <li><i className="fas fa-times text-red-400 mr-1"></i>Pointing to 3 separate folders (SHP, CSV, CFG)</li>
                  <li><i className="fas fa-times text-red-400 mr-1"></i>Separate scripts for scenario imports</li>
                </ul>
              </div>
              <a href="https://github.com/innovyze/Open-Source-Support/tree/main/01%20InfoWorks%20ICM/01%20Ruby/01%20InfoWorks/0060%20-%20InfoSewer%20to%20InfoWorks%20ICM%20Conversion%20Tools/Archive" className="inline-flex items-center text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100 text-xs underline" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github mr-1"></i>
                View in Archive on GitHub
              </a>
            </div>

            {/* Historical Method B: Manual 9-Step ODIC Process */}
            <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-xl p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide">Legacy / Fallback</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2 text-base sm:text-lg">
                <i className="fas fa-list-ol text-gray-500 mr-2"></i>
                Manual 9-Step ODIC Process
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3">The original step-by-step method using InfoWorks ICM's Open Data Import Centre (ODIC) with CFG configuration files, CSV data files, and SHP geometry files.</p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700 mb-3">
                <p className="text-xs font-medium text-gray-700 dark:text-gray-200 mb-2">This method required:</p>
                <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                  <li><i className="fas fa-times text-red-400 mr-1"></i>Manual DBF to CSV conversion via Excel</li>
                  <li><i className="fas fa-times text-red-400 mr-1"></i>Manual Map.mdb to SHP export via ArcCatalog</li>
                  <li><i className="fas fa-times text-red-400 mr-1"></i>Running each of 9 import steps individually via ODIC</li>
                  <li><i className="fas fa-times text-red-400 mr-1"></i>Manual SQL script execution for data manipulation</li>
                  <li><i className="fas fa-times text-red-400 mr-1"></i>2-4 hours of hands-on work</li>
                </ul>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                <i className="fas fa-info-circle mr-1"></i>
                Still useful for edge cases, debugging individual import stages, or custom SQL adjustments.
              </p>
              <button 
                onClick={() => showStep('step1')}
                className="inline-flex items-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 text-xs"
              >
                <i className="fas fa-arrow-right mr-2"></i>
                View Manual 9-Step Process
              </button>
            </div>
          </div>
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