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

function OverviewContent({ showStep }: { showStep: (step: string) => void }) {
  return (
    <div className="animate-fade-in">
      <div className="gradient-primary text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">InfoSewer to ICM InfoWorks Networks</h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">Complete Conversion Guide</p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="glass-effect px-6 py-3 rounded-full">
                <i className="fas fa-clock mr-2"></i>
                <span>~2-4 hours</span>
              </div>
              <div className="glass-effect px-6 py-3 rounded-full">
                <i className="fas fa-layer-group mr-2"></i>
                <span>9 Steps</span>
              </div>
              <div className="glass-effect px-6 py-3 rounded-full">
                <i className="fas fa-users mr-2"></i>
                <span>Expert Level</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Requirements Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Requirements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="step-card bg-white p-6 rounded-xl">
              <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-desktop text-white"></i>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Software</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• ICM InfoWorks Networks</li>
                <li>• Microsoft Excel</li>
                <li>• Ruby interpreter</li>
              </ul>
            </div>

            <div className="step-card bg-white p-6 rounded-xl">
              <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-file-alt text-white"></i>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Files</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• VBA Conversion Macro</li>
                <li>• Ruby Scripts (.rb)</li>
                <li>• Configuration Files (.cfg)</li>
              </ul>
            </div>

            <div className="step-card bg-white p-6 rounded-xl">
              <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-database text-white"></i>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Access</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• InfoSewer IEDB folder</li>
                <li>• GitHub repository</li>
                <li>• Admin privileges</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process Overview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Conversion Process</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-download text-white text-2xl"></i>
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Prepare</h3>
              <p className="text-gray-600">Download required files and export InfoSewer database</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-exchange-alt text-white text-2xl"></i>
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Convert</h3>
              <p className="text-gray-600">Transform data using Excel macros and Ruby scripts</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-upload text-white text-2xl"></i>
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Import</h3>
              <p className="text-gray-600">Import converted data into ICM InfoWorks Networks</p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <Alert type="warning" className="mb-8">
          <h4 className="font-semibold mb-2">Important Notice</h4>
          <p>This conversion process requires professional software licenses and technical expertise. Always backup your original data before beginning the conversion process.</p>
        </Alert>

        {/* Getting Started */}
        <div className="text-center">
          <button 
            onClick={() => showStep('step1')}
            className="gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <i className="fas fa-arrow-right mr-2"></i>
            Start Conversion Process
          </button>
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
            <h1 className="text-3xl font-bold text-gray-800">Step 1: Download Required Files</h1>
            <p className="text-gray-600">Get the conversion tools from GitHub repository</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Alert type="info">
            <h4 className="font-semibold mb-2">GitHub Repository</h4>
            <p>Access the official Innovyze conversion tools from the GitHub repository:</p>
            <div className="mt-3">
              <a href="https://github.com/innovyze/Open-Source-Support" className="text-blue-600 hover:text-blue-800 underline text-sm font-mono" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github mr-2"></i>
                https://github.com/innovyze/Open-Source-Support
              </a>
            </div>
          </Alert>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-gray-800 mb-4">Required Files Location</h3>
            <CodeBlock language="bash" code={`Repository Path:
01 ICM InfoWorks Networks/
├── 01 Ruby/
│   └── 01 InfoWorks/
│       └── 0060 - InfoSewer to ICM InfoWorks Networks Conversion Tools/
│           ├── InfoSewer_VBA_DBF_CSV_Conversion.xlsm
│           ├── *.cfg files
│           ├── *.rb files
│           └── SQL validation queries

GitHub Links:
• Main Repository: https://github.com/innovyze/Open-Source-Support
• ICM Tools: https://github.com/innovyze/ICM-InfoWorks
• Ruby Scripts: https://github.com/innovyze/Ruby-Scripts`} />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-gray-800 mb-4">File Descriptions</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-file-excel text-green-600 text-sm"></i>
                </div>
                <div>
                  <div className="font-medium text-gray-800">Excel VBA Macro</div>
                  <div className="text-sm text-gray-600">Converts DBF files to CSV format</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-cog text-blue-600 text-sm"></i>
                </div>
                <div>
                  <div className="font-medium text-gray-800">Configuration Files</div>
                  <div className="text-sm text-gray-600">Import templates for ICM</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-gem text-red-600 text-sm"></i>
                </div>
                <div>
                  <div className="font-medium text-gray-800">Ruby Scripts</div>
                  <div className="text-sm text-gray-600">Data transformation utilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Alert type="warning">
            <h4 className="font-semibold mb-2">Access Requirements</h4>
            <p>You need appropriate access permissions to download these professional conversion tools.</p>
          </Alert>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-gray-800 mb-4">Download Checklist</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                <span className="text-gray-700">Excel VBA macro file downloaded</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                <span className="text-gray-700">All .cfg configuration files downloaded</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                <span className="text-gray-700">Ruby transformation scripts downloaded</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                <span className="text-gray-700">SQL validation queries downloaded</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                <span className="text-gray-700">Files organized in working directory</span>
              </label>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-gray-800 mb-4">Next Steps</h3>
            <p className="text-gray-600 mb-4">Once you have downloaded all required files, you can proceed to export your InfoSewer database.</p>
            <button 
              onClick={() => showStep('step2')}
              className="gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              <i className="fas fa-arrow-right mr-2"></i>
              Continue to Step 2
            </button>
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

      <div className="space-y-8">
        <Alert type="info">
          <h4 className="font-semibold mb-2">Database Location</h4>
          <p>InfoSewer stores its data in DBF (dBase) format within the IEDB folder. You'll need to locate and access this folder to extract the required database files.</p>
        </Alert>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="font-semibold text-gray-800 mb-4">Locate IEDB Folder</h3>
              <div className="space-y-4">
                <CodeBlock language="bash" code={`# Typical InfoSewer installation path
C:\\Program Files\\Innovyze\\InfoSewer\\IEDB\\

# Or user-specific location
C:\\Users\\[Username]\\Documents\\InfoSewer\\IEDB\\

# Alternative Innovyze installation path
C:\\Program Files (x86)\\Innovyze\\InfoSewer\\IEDB\\`} />
                
                <Alert type="warning">
                  <p className="text-sm">Path may vary depending on your InfoSewer installation and configuration.</p>
                </Alert>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="font-semibold text-gray-800 mb-4">Required DBF Files</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 font-mono text-sm">Nodes.dbf</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 font-mono text-sm">Links.dbf</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700 font-mono text-sm">Subcatchments.dbf</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700 font-mono text-sm">Options.dbf</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 font-mono text-sm">Network.dbf</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="font-semibold text-gray-800 mb-4">Export Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Access InfoSewer Project</div>
                    <div className="text-sm text-gray-600">Open your InfoSewer project and ensure all data is saved</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Navigate to IEDB Folder</div>
                    <div className="text-sm text-gray-600">Locate the database files in your InfoSewer installation directory</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Copy DBF Files</div>
                    <div className="text-sm text-gray-600">Copy all required DBF files to your working directory</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold text-sm">4</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Backup Original Files</div>
                    <div className="text-sm text-gray-600">Create backup copies before proceeding with conversion</div>
                  </div>
                </div>
              </div>
            </div>

            <Alert type="success">
              <h4 className="font-semibold mb-2">Verification</h4>
              <p>Ensure all DBF files are accessible and not corrupted before proceeding to the next step.</p>
            </Alert>
          </div>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <button 
            onClick={() => showStep('step1')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Previous Step</span>
          </button>
          <button 
            onClick={() => showStep('step3')}
            className="gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
          >
            <span>Next Step</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
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
            <i className="fas fa-file-excel text-white"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Step 3: Excel VBA Conversion</h1>
            <p className="text-gray-600">Convert DBF files to CSV format using Excel macro</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-gray-800 mb-4">Open Excel Macro</h3>
            <p className="text-gray-600 mb-4">Launch the VBA conversion macro downloaded in Step 1.</p>
            
            <CodeBlock language="vb" code={`' Excel VBA Macro: InfoSewer_VBA_DBF_CSV_Conversion.xlsm
' Purpose: Convert DBF files to CSV format for ICM import

Sub ConvertDBFToCSV()
    Dim dbfPath As String
    Dim csvPath As String
    
    ' Set file paths
    dbfPath = "C:\\InfoSewer\\IEDB\\"
    csvPath = "C:\\Conversion\\CSV\\"
    
    ' Convert each DBF file
    Call ProcessNodes(dbfPath, csvPath)
    Call ProcessLinks(dbfPath, csvPath)
    Call ProcessSubcatchments(dbfPath, csvPath)
    
End Sub`} />
          </div>

          <Alert type="info">
            <h4 className="font-semibold mb-2">Macro Security</h4>
            <p>Enable macros in Excel security settings before running the conversion. Go to File → Options → Trust Center → Macro Settings.</p>
          </Alert>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-gray-800 mb-4">Configuration Parameters</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">DBF Source Path</label>
                <div className="font-mono text-sm bg-gray-100 p-2 rounded border">C:\InfoSewer\IEDB\</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CSV Output Path</label>
                <div className="font-mono text-sm bg-gray-100 p-2 rounded border">C:\Conversion\CSV\</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Field Delimiter</label>
                <div className="font-mono text-sm bg-gray-100 p-2 rounded border">Comma (,)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-gray-800 mb-4">Conversion Process</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-semibold text-sm">1</span>
                </div>
                <div>
                  <div className="font-medium text-gray-800">Load DBF Files</div>
                  <div className="text-sm text-gray-600">Macro automatically detects and loads DBF files</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-semibold text-sm">2</span>
                </div>
                <div>
                  <div className="font-medium text-gray-800">Field Mapping</div>
                  <div className="text-sm text-gray-600">Maps InfoSewer fields to ICM-compatible format</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-semibold text-sm">3</span>
                </div>
                <div>
                  <div className="font-medium text-gray-800">Data Transformation</div>
                  <div className="text-sm text-gray-600">Converts units and formats according to ICM requirements</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-semibold text-sm">4</span>
                </div>
                <div>
                  <div className="font-medium text-gray-800">CSV Export</div>
                  <div className="text-sm text-gray-600">Generates CSV files ready for ICM import</div>
                </div>
              </div>
            </div>
          </div>

          <Alert type="warning">
            <h4 className="font-semibold mb-2">Expected Output</h4>
            <p>The macro will generate the following CSV files:</p>
            <ul className="mt-2 text-sm space-y-1">
              <li>• Nodes_ICM.csv</li>
              <li>• Links_ICM.csv</li>
              <li>• Subcatchments_ICM.csv</li>
              <li>• Options_ICM.csv</li>
            </ul>
          </Alert>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-gray-800 mb-4">Quality Check</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                <span className="text-gray-700">All CSV files generated successfully</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                <span className="text-gray-700">No error messages in Excel</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                <span className="text-gray-700">CSV files contain expected data</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                <span className="text-gray-700">File sizes are reasonable</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <button 
          onClick={() => showStep('step2')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Previous Step</span>
        </button>
        <button 
          onClick={() => showStep('step4')}
          className="gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
        >
          <span>Next Step</span>
          <i className="fas fa-arrow-right ml-2"></i>
        </button>
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
            <i className="fas fa-project-diagram text-white"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Step 4: Create ICM InfoWorks Networks Database</h1>
            <p className="text-gray-600">Set up a new ICM database for the converted data</p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <Alert type="info">
          <h4 className="font-semibold mb-2">Database Creation</h4>
          <p>Create a new ICM InfoWorks Networks database to receive the converted InfoSewer data. This ensures a clean import process.</p>
        </Alert>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-gray-800 mb-4">Database Configuration</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Database Name</label>
                <input 
                  type="text" 
                  placeholder="InfoSewer_Converted" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project CRS</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>WGS84 / UTM Zone 17N (EPSG:32617)</option>
                  <option>State Plane Coordinate System</option>
                  <option>Local Grid System</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Units System</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>US Customary</option>
                  <option>Metric (SI)</option>
                  <option>UK Imperial</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-gray-800 mb-4">ICM Setup Steps</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-sm">1</span>
                </div>
                <div>
                  <div className="font-medium text-gray-800">Launch ICM InfoWorks Networks</div>
                  <div className="text-sm text-gray-600">Open ICM InfoWorks Networks software</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-sm">2</span>
                </div>
                <div>
                  <div className="font-medium text-gray-800">Create New Database</div>
                  <div className="text-sm text-gray-600">File → New → Database</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-sm">3</span>
                </div>
                <div>
                  <div className="font-medium text-gray-800">Configure Settings</div>
                  <div className="text-sm text-gray-600">Set coordinate system and units</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-sm">4</span>
                </div>
                <div>
                  <div className="font-medium text-gray-800">Save Database</div>
                  <div className="text-sm text-gray-600">Save in accessible location</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <button 
            onClick={() => showStep('step3')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Previous Step</span>
          </button>
          <button 
            onClick={() => showStep('step5')}
            className="gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
          >
            <span>Next Step</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
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
            <i className="fas fa-upload text-white"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Step 5: Import Nodes</h1>
            <p className="text-gray-600">Import converted node data into ICM</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="font-semibold text-gray-800 mb-4">Import Configuration</h3>
        <CodeBlock language="sql" code={`-- Node import configuration
SELECT 
    node_id,
    x_coordinate,
    y_coordinate,
    ground_level,
    invert_level,
    node_type
FROM Nodes_ICM.csv`} />
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <button 
          onClick={() => showStep('step4')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Previous Step</span>
        </button>
        <button 
          onClick={() => showStep('step6')}
          className="gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
        >
          <span>Next Step</span>
          <i className="fas fa-arrow-right ml-2"></i>
        </button>
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
            <i className="fas fa-route text-white"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Step 6: Import Links</h1>
            <p className="text-gray-600">Import pipe and conduit data</p>
          </div>
        </div>
      </div>
      
      <Alert type="info">
        <p>Import link/conduit data using similar process to nodes...</p>
      </Alert>

      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <button 
          onClick={() => showStep('step5')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Previous Step</span>
        </button>
        <button 
          onClick={() => showStep('step7')}
          className="gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
        >
          <span>Next Step</span>
          <i className="fas fa-arrow-right ml-2"></i>
        </button>
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
            <i className="fas fa-water text-white"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Step 7: Import Subcatchments</h1>
            <p className="text-gray-600">Import subcatchment and drainage area data</p>
          </div>
        </div>
      </div>
      
      <Alert type="info">
        <p>Import subcatchment data for hydrologic modeling...</p>
      </Alert>

      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <button 
          onClick={() => showStep('step6')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Previous Step</span>
        </button>
        <button 
          onClick={() => showStep('step8')}
          className="gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
        >
          <span>Next Step</span>
          <i className="fas fa-arrow-right ml-2"></i>
        </button>
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
            <i className="fas fa-cogs text-white"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Step 8: Configure Options</h1>
            <p className="text-gray-600">Set up simulation parameters and options</p>
          </div>
        </div>
      </div>
      
      <Alert type="info">
        <p>Configure simulation options and model parameters...</p>
      </Alert>

      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <button 
          onClick={() => showStep('step7')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Previous Step</span>
        </button>
        <button 
          onClick={() => showStep('step9')}
          className="gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
        >
          <span>Next Step</span>
          <i className="fas fa-arrow-right ml-2"></i>
        </button>
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
            <i className="fas fa-check-circle text-white"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Step 9: Validation & Testing</h1>
            <p className="text-gray-600">Verify the conversion and test the model</p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <Alert type="success">
          <h4 className="font-semibold mb-2">Conversion Complete!</h4>
          <p>Your InfoSewer model has been successfully converted to ICM InfoWorks Networks. Run validation tests to ensure accuracy.</p>
        </Alert>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-gray-800 mb-4">Validation Checklist</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                <span className="text-gray-700">All nodes imported correctly</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                <span className="text-gray-700">Links connected properly</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                <span className="text-gray-700">Subcatchments assigned</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                <span className="text-gray-700">Model runs without errors</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                <span className="text-gray-700">Results match expected values</span>
              </label>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-gray-800 mb-4">Next Steps</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-play text-green-600 text-sm"></i>
                </div>
                <div>
                  <div className="font-medium text-gray-800">Run Test Simulation</div>
                  <div className="text-sm text-gray-600">Verify model stability and accuracy</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-chart-line text-green-600 text-sm"></i>
                </div>
                <div>
                  <div className="font-medium text-gray-800">Compare Results</div>
                  <div className="text-sm text-gray-600">Compare with original InfoSewer results</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-save text-green-600 text-sm"></i>
                </div>
                <div>
                  <div className="font-medium text-gray-800">Save Final Model</div>
                  <div className="text-sm text-gray-600">Create backup of converted model</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => showStep('overview')}
            className="gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <i className="fas fa-refresh mr-2"></i>
            Start New Conversion
          </button>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <button 
            onClick={() => showStep('step8')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Previous Step</span>
          </button>
          <div className="flex items-center text-green-600">
            <i className="fas fa-check-circle mr-2"></i>
            <span className="font-medium">Conversion Complete!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
