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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">InfoSewer to InfoWorks ICM</h1>
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
                <li>• InfoWorks ICM</li>
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
              <p className="text-gray-600">Import converted data into InfoWorks ICM</p>
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

        {/* Official Documentation Reference */}
        <div className="mt-12 mb-8">
          <Alert type="info">
            <h4 className="font-semibold mb-3"><i className="fas fa-book mr-2"></i>Official Autodesk Documentation - Step 2</h4>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm text-gray-700 mb-3"><strong>Step 2: Import Links and Correct Geometry</strong></p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>1. Import LINK.CSV:</strong> Use ODIC to import data from LINK.CSV with configuration file Step02_InfoSewer_Link_csv.cfg. This imports all conduit information including ID, upstream and downstream node IDs, lengths, and other hydraulic parameters.</p>
                <p><strong>2. Run Geometry Correction:</strong> Execute SQL scripts to correct any geometry issues that may have occurred during the import process. This ensures proper connectivity between nodes and links.</p>
                <p><strong>3. Import Geometry:</strong> Use ODIC to import link geometry data from PIPE.shp, FORCEMAIN.shp, and PUMP.shp using respective configuration files into appropriate tables.</p>
                <p className="text-yellow-700 bg-yellow-50 p-2 rounded"><strong>Note:</strong> If error "Autogenerated Link IDs: multiple link objects at..." occurs, it can safely be ignored. ICM assigns Link IDs using syntax us_node_id.link_suffix.</p>
              </div>
              <p className="text-xs text-gray-500 mt-3 border-t pt-2">
                Source: <a href="https://knowledge.autodesk.com/article/Step-1-Import-Nodes-and-Create-Subcatchments-in-the-Import-of-InfoSewer-to-ICM-InfoWorks" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Official Autodesk Documentation</a>
              </p>
              <div className="mt-4">
                <h5 className="text-xs font-semibold text-gray-600 mb-2">Source Material:</h5>
                <CodeBlock language="text" code={`Step 2: Import Links and Correct Geometry

This procedure imports all InfoSewer conduits and corrects geometry issues.

1. Import LINK.CSV:
Use ODIC to import data from LINK.CSV with configuration file Step02_InfoSewer_Link_csv.cfg. This imports all conduit information including ID, upstream and downstream node IDs, lengths, and other hydraulic parameters.

2. Run Geometry Correction:
Execute SQL scripts to correct any geometry issues that may have occurred during the import process. This ensures proper connectivity between nodes and links.

3. Import Geometry:
Use ODIC to import link geometry data from PIPE.shp, FORCEMAIN.shp, and PUMP.shp using respective configuration files into appropriate tables.

Important Notes:
- Use Overwrite and Update based on asset ID options during import
- Verify that all links are properly connected to their upstream and downstream nodes
- Check for any missing or incorrectly imported conduit data
- If error "Autogenerated Link IDs: multiple link objects at..." occurs, it can safely be ignored`} />
              </div>
            </div>
          </Alert>
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

      {/* Official Documentation Reference */}
      <div className="mt-12 mb-8">
        <Alert type="info">
          <h4 className="font-semibold mb-3"><i className="fas fa-book mr-2"></i>Official Autodesk Documentation - Step 3</h4>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-gray-700 mb-3"><strong>Step 3: Import Manhole Hydraulics</strong></p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Import MHHYD.CSV:</strong> Use ODIC to import data from MHHYD.CSV with configuration file Step03_InfoSewer_manhole_hydraulics_mhhyd_csv.cfg.</p>
              <p>This step imports manhole rim elevation as ground level and manhole diameter as shaft plan area. The user number fields hold LOAD1 through LOAD10, while user text fields hold PATTERN1 through PATTERN10.</p>
              <p className="text-yellow-700 bg-yellow-50 p-2 rounded"><strong>Important:</strong> Use Overwrite and Update based on asset ID options since nodes were already imported in Step 1.</p>
            </div>
            <p className="text-xs text-gray-500 mt-3 border-t pt-2">
              Source: <a href="https://knowledge.autodesk.com/article/Step-3-Import-Manhole-Hydraulics-in-the-Import-of-InfoSewer-to-ICM-InfoWorks-using-ODIC" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Official Autodesk Documentation</a>
            </p>
            <div className="mt-4">
              <h5 className="text-xs font-semibold text-gray-600 mb-2">Source Material:</h5>
              <CodeBlock language="text" code={`Step 3: Import Manhole Hydraulics

This procedure imports hydraulic properties for manholes from InfoSewer to InfoWorks ICM.

Import MHHYD.CSV:
Use ODIC to import data from MHHYD.CSV with configuration file Step03_InfoSewer_manhole_hydraulics_mhhyd_csv.cfg.

This step imports manhole rim elevation as ground level and manhole diameter as shaft plan area. The user number fields hold LOAD1 through LOAD10, while user text fields hold PATTERN1 through PATTERN10.

Important Notes:
- Use Overwrite and Update based on asset ID options since nodes were already imported in Step 1
- Verify that all hydraulic parameters are correctly transferred
- Check for any missing or zero values that might affect model performance`} />
            </div>
          </div>
        </Alert>
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

        {/* Official Documentation Reference */}
        <div className="mt-12 mb-8">
          <Alert type="info">
            <h4 className="font-semibold mb-3"><i className="fas fa-book mr-2"></i>Official Autodesk Documentation - Step 3</h4>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm text-gray-700 mb-3"><strong>Step 3: Import Manhole Hydraulics</strong></p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Import MHHYD.CSV:</strong> Use ODIC to import data from MHHYD.CSV with configuration file Step03_InfoSewer_manhole_hydraulics_mhhyd_csv.cfg.</p>
                <p>This step imports manhole rim elevation as ground level and manhole diameter as shaft plan area. The user number fields hold LOAD1 through LOAD10, while user text fields hold PATTERN1 through PATTERN10.</p>
                <p className="text-yellow-700 bg-yellow-50 p-2 rounded"><strong>Important:</strong> Use Overwrite and Update based on asset ID options since nodes were already imported in Step 1.</p>
              </div>
              <p className="text-xs text-gray-500 mt-3 border-t pt-2">
                Source: <a href="https://knowledge.autodesk.com/article/Step-3-Import-Manhole-Hydraulics-in-the-Import-of-InfoSewer-to-ICM-InfoWorks-using-ODIC" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Official Autodesk Documentation</a>
              </p>
              <div className="mt-4">
                <h5 className="text-xs font-semibold text-gray-600 mb-2">Source Material:</h5>
                <CodeBlock language="text" code={`Step 3: Import Manhole Hydraulics

This procedure imports hydraulic properties for manholes from InfoSewer to InfoWorks ICM.

Import MHHYD.CSV:
Use ODIC to import data from MHHYD.CSV with configuration file Step03_InfoSewer_Manhole_HYD_csv.cfg. This imports manhole hydraulic information including invert elevations, rim elevations, and hydraulic losses.

Important Notes:
- Use Overwrite and Update based on asset ID options during import
- Verify that all hydraulic parameters are correctly transferred
- Check for any missing or zero values that might affect model performance`} />
              </div>
            </div>
          </Alert>
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

      {/* Official Documentation Reference */}
      <div className="mt-12 mb-8">
        <Alert type="info">
          <h4 className="font-semibold mb-3"><i className="fas fa-book mr-2"></i>Official Autodesk Documentation - Step 4</h4>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-gray-700 mb-3"><strong>Step 4: Import Link Hydraulics</strong></p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>1. Import PIPEHYD.CSV:</strong> Use ODIC to import data from PIPEHYD.CSV with configuration file Step04_InfoSewer_link_hydraulics_pipehyd_csv.cfg to the Conduit table.</p>
              <p>This imports pipe diameter, length, roughness coefficients, invert elevations, and number of barrels. Imported pipes are assigned user_text_10 = 'Pipe'.</p>
              <p><strong>2. Run SQL Script:</strong> Execute SET number_of_barrels to set undefined/0 values to 1, since when number of barrels (PARALLEL) is undefined or 0 in InfoSewer, it is assumed to be 1.</p>
              <p className="text-yellow-700 bg-yellow-50 p-2 rounded"><strong>Important:</strong> Use Overwrite and Update based on asset ID options since links were already imported in Step 2.</p>
            </div>
            <p className="text-xs text-gray-500 mt-3 border-t pt-2">
              Source: <a href="https://knowledge.autodesk.com/article/Step-4-Import-Link-Hydraulics-in-the-Import-of-InfoSewer-to-ICM-InfoWorks-using-ODIC" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Official Autodesk Documentation</a>
            </p>
            <div className="mt-4">
              <h5 className="text-xs font-semibold text-gray-600 mb-2">Source Material:</h5>
              <CodeBlock language="text" code={`Step 4: Import Link Hydraulics

This procedure imports hydraulic properties for conduits from InfoSewer to InfoWorks ICM.

Import LINKHYD.CSV:
Use ODIC to import data from LINKHYD.CSV with configuration file Step04_InfoSewer_Link_HYD_csv.cfg. This imports conduit hydraulic information including pipe diameters, lengths, roughness coefficients, and slopes.

Important Notes:
- Use Overwrite and Update based on asset ID options during import
- Verify that all pipe dimensions and hydraulic parameters are correctly transferred
- Check slope calculations and ensure they match the original InfoSewer model
- Validate roughness coefficients for different pipe materials`} />
            </div>
          </div>
        </Alert>
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

      {/* Official Documentation Reference */}
      <div className="mt-12 mb-8">
        <Alert type="info">
          <h4 className="font-semibold mb-3"><i className="fas fa-book mr-2"></i>Official Autodesk Documentation - Step 5</h4>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-gray-700 mb-3"><strong>Step 5: Import Pump Hydraulics</strong></p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>1. Import WWELLHYD.CSV:</strong> Use ODIC to import data from WWELLHYD.CSV with configuration file Step05_Infosewer_wetwell_wwellhyd_csv.cfg. This imports wet well data including bottom elevation as chamber floor level, maximum level as ground level, and diameter as chamber and shaft plan areas.</p>
              <p><strong>2. Run Find_Pumps Script:</strong> Execute SQL script Find_Pumps to convert the appropriate links to pumps. This script may take time depending on model size.</p>
              <p><strong>3. Import PUMPHYD.CSV:</strong> Use ODIC to import data from PUMPHYD.CSV with configuration file Step05a_InfoSewer_pump_curve_pumphyd_csv.cfg. This imports pump CAPACITY from InfoSewer as Discharge in ICM.</p>
              <p className="text-yellow-700 bg-yellow-50 p-2 rounded"><strong>Important:</strong> Use Overwrite and Update based on asset ID options. Pump information should be verified based on your InfoSewer model setup.</p>
            </div>
            <p className="text-xs text-gray-500 mt-3 border-t pt-2">
              Source: <a href="https://knowledge.autodesk.com/article/Importing-InfoSewer-to-InfoWorks-ICM---Step-5-Import-Pump-Hydraulics-in-the-Import-of-InfoSewer-to-ICM-InfoWorks-using-ODIC" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Official Autodesk Documentation</a>
            </p>
            <div className="mt-4">
              <h5 className="text-xs font-semibold text-gray-600 mb-2">Source Material:</h5>
              <CodeBlock language="text" code={`Step 5: Import Pump Hydraulics

This procedure imports pump hydraulic properties from InfoSewer to InfoWorks ICM.

Import PUMPHYD.CSV:
Use ODIC to import data from PUMPHYD.CSV with configuration file Step05_InfoSewer_Pump_HYD_csv.cfg. This imports pump hydraulic information including pump curves, capacity, head, efficiency, and operational parameters.

Important Notes:
- Use Overwrite and Update based on asset ID options during import
- Verify that all pump curves and operational parameters are correctly transferred
- Check pump station configurations and wet well parameters
- Validate pump control settings and operational schedules`} />
            </div>
          </div>
        </Alert>
      </div>

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

      {/* Official Documentation Reference */}
      <div className="mt-12 mb-8">
        <Alert type="info">
          <h4 className="font-semibold mb-3"><i className="fas fa-book mr-2"></i>Official Autodesk Documentation - Step 6</h4>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-gray-700 mb-3"><strong>Step 6: Import Pump Controls</strong></p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>1. Import CONTROL.CSV:</strong> Use ODIC to import data from CONTROL.CSV with configuration file Step06_InfoSewer_pump_control_control_csv.cfg to the Pump table.</p>
              <p>This step imports control data including switch on/switch off levels (in depth, not elevation). It also assigns a default of Fixed Pump for all pumps, an assumption which should be verified depending on your particular InfoSewer model setup.</p>
              <p><strong>2. Run SQL Script:</strong> Execute SET pump on and off to correct imported depths to elevations.</p>
              <p className="text-yellow-700 bg-yellow-50 p-2 rounded"><strong>Important:</strong> Use Overwrite and Update based on asset ID options since pumps were already imported. The PUMP.CSV file contains additional pump information which may be helpful to import into Notes, user number, or user text fields.</p>
            </div>
            <p className="text-xs text-gray-500 mt-3 border-t pt-2">
              Source: <a href="https://knowledge.autodesk.com/article/Step-6-Import-Pump-Controls-in-the-Import-of-InfoSewer-to-ICM-InfoWorks-using-ODIC" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Official Autodesk Documentation</a>
            </p>
            <div className="mt-4">
              <h5 className="text-xs font-semibold text-gray-600 mb-2">Source Material:</h5>
              <CodeBlock language="text" code={`Step 6: Import Pump Controls

This procedure imports pump control settings and operational parameters from InfoSewer to InfoWorks ICM.

Import CONTROLS.CSV:
Use ODIC to import data from CONTROLS.CSV with configuration file Step06_InfoSewer_Controls_csv.cfg. This imports pump control information including start/stop levels, operational schedules, and control logic.

Important Notes:
- Use Overwrite and Update based on asset ID options during import
- Verify that all control parameters are correctly transferred
- Check pump operational logic and timing sequences
- Validate wet well level controls and alarm settings
- Ensure proper integration with pump hydraulic data from previous steps`} />
            </div>
          </div>
        </Alert>
      </div>

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

      {/* Official Documentation Reference */}
      <div className="mt-12 mb-8">
        <Alert type="info">
          <h4 className="font-semibold mb-3"><i className="fas fa-book mr-2"></i>Official Autodesk Documentation - Step 7</h4>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-gray-700 mb-3"><strong>Step 7: Import Subcatchment Loadings</strong></p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Import MHHYD.CSV:</strong> Use ODIC to import data from MHHYD.CSV with configuration file Step07_InfoSewer_subcatchment_dwf_mhhyd_csv.cfg.</p>
              <p>This step imports the LOAD and PATTERN information from InfoSewer into the Subcatchment table in ICM into the user number (loads) and user text (patterns) fields.</p>
              <p className="text-yellow-700 bg-yellow-50 p-2 rounded"><strong>Important:</strong> User number and user text fields are not used in simulations, so this data must be further investigated and assigned to the appropriate fields prior to finalizing the conversion. Use Overwrite and Only update existing objects options.</p>
            </div>
            <p className="text-xs text-gray-500 mt-3 border-t pt-2">
              Source: <a href="https://knowledge.autodesk.com/article/Step-7-Import-Pump-Controls-in-the-Import-of-InfoSewer-to-ICM-InfoWorks-using-ODIC" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Official Autodesk Documentation</a>
            </p>
            <div className="mt-4">
              <h5 className="text-xs font-semibold text-gray-600 mb-2">Source Material:</h5>
              <CodeBlock language="text" code={`Step 7: Import Subcatchment Loadings

This procedure imports subcatchment loading information from InfoSewer into InfoWorks ICM.

Import MHHYD.CSV:
Use ODIC to import data from MHHYD.CSV with configuration file Step07_InfoSewer_subcatchment_dwf_mhhyd_csv.cfg.

This step imports the LOAD and PATTERN information from InfoSewer into the Subcatchment table in ICM into the user number (loads) and user text (patterns) fields.

Important Note:
User number and user text fields are not used in simulations, so this data must be further investigated and assigned to the appropriate fields prior to finalizing the conversion. Use Overwrite and Only update existing objects options.`} />
            </div>
          </div>
        </Alert>
      </div>

      {/* Official Documentation Reference */}
      <div className="mt-12 mb-8">
        <Alert type="info">
          <h4 className="font-semibold mb-3"><i className="fas fa-book mr-2"></i>Official Autodesk Documentation - Step 8</h4>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-gray-700 mb-3"><strong>Step 8: Import Wet Well Hydraulics</strong></p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>1. Run SQL Query:</strong> Execute SET calculate wet well hydraulics to correct the wet well hydraulic parameters imported from WWELLHYD.CSV. This converts imported diameters to shaft and chamber areas and converts the maximum wet well level to ground level.</p>
              <p><strong>2. Choose Forcemain Solution:</strong> Run either 'Use full solution for forcemains' or 'Use forcemain solution for forcemains' SQL query.</p>
              <p className="text-blue-700 bg-blue-50 p-2 rounded">Full solution: Sets Manning's n roughness values to 0.014 for forcemains. Forcemain solution: Sets roughness type to HW for forcemains.</p>
              <p><strong>3. Run Validation:</strong> In ICM, run the validation tool to ensure all imported and adjusted data is accurate. If errors occur, revisit previous steps and correct discrepancies before proceeding.</p>
            </div>
            <p className="text-xs text-gray-500 mt-3 border-t pt-2">
              Source: <a href="https://knowledge.autodesk.com/article/Step-8-Import-Subcatchment-DWF-in-the-Import-of-InfoSewer-to-ICM-InfoWorks-using-ODIC" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Official Autodesk Documentation</a>
            </p>
            <div className="mt-4">
              <h5 className="text-xs font-semibold text-gray-600 mb-2">Source Material:</h5>
              <CodeBlock language="text" code={`Step 8: Import Wet Well Hydraulics

This procedure finalizes the hydraulic parameters and prepares the model for validation.

1. Run SQL Query:
Execute SET calculate wet well hydraulics to correct the wet well hydraulic parameters imported from WWELLHYD.CSV. This converts imported diameters to shaft and chamber areas and converts the maximum wet well level to ground level.

2. Choose Forcemain Solution:
Run either 'Use full solution for forcemains' or 'Use forcemain solution for forcemains' SQL query.

Full solution: Sets Manning's n roughness values to 0.014 for forcemains.
Forcemain solution: Sets roughness type to HW for forcemains.

3. Run Validation:
In ICM, run the validation tool to ensure all imported and adjusted data is accurate. If errors occur, revisit previous steps and correct discrepancies before proceeding.`} />
            </div>
          </div>
        </Alert>
      </div>

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

        {/* Official Documentation Reference */}
        <div className="mt-12 mb-8">
          <Alert type="info">
            <h4 className="font-semibold mb-3"><i className="fas fa-book mr-2"></i>Official Autodesk Documentation - Step 9</h4>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm text-gray-700 mb-3"><strong>Step 9: Configuration for Rainfall-Dependent Infiltration and Inflow (RDII) Hydrographs</strong></p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>This is an optional conversion step for InfoSewer models utilizing the implicit tri-triangle unit hydrograph method (a modified RTK method).</p>
                <p><strong>1. Import HYDROGRH.CSV:</strong> Use ODIC to import data from HYDROGRH.CSV with configuration file Step09_rdii_hydrograph_csv.cfg. This imports the implicit pattern parameters (RTK) from InfoSewer into the RTK hydrograph table in ICM.</p>
                <p><strong>2. Run SQL Script:</strong> Execute Assign R Values script to calculate corrected R values and assign them to the corresponding field in ICM.</p>
                <p className="text-yellow-700 bg-yellow-50 p-2 rounded"><strong>Note:</strong> The T and K values are imported directly into corresponding ICM fields. The R values differ between InfoSewer and ICM, so R values from InfoSewer are imported to user number fields for later modification.</p>
              </div>
              <p className="text-xs text-gray-500 mt-3 border-t pt-2">
                Source: <a href="https://knowledge.autodesk.com/article/Step-9-rdii-hydrograph-csv-cfg-Configuration-for-Rainfall-Dependent-Infiltration-and-Inflow-RDII-hydrographs" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Official Autodesk Documentation</a>
              </p>
              <div className="mt-4">
                <h5 className="text-xs font-semibold text-gray-600 mb-2">Source Material:</h5>
                <CodeBlock language="text" code={`Step 9: Configuration for Rainfall-Dependent Infiltration and Inflow (RDII) Hydrographs

This is an optional conversion step for InfoSewer models utilizing the implicit tri-triangle unit hydrograph method (a modified RTK method).

1. Import HYDROGRH.CSV:
Use ODIC to import data from HYDROGRH.CSV with configuration file Step09_rdii_hydrograph_csv.cfg. This imports the implicit pattern parameters (RTK) from InfoSewer into the RTK hydrograph table in ICM.

2. Run SQL Script:
Execute Assign R Values script to calculate corrected R values and assign them to the corresponding field in ICM.

Note:
The T and K values are imported directly into corresponding ICM fields. The R values differ between InfoSewer and ICM, so R values from InfoSewer are imported to user number fields for later modification.`} />
              </div>
            </div>
          </Alert>
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
