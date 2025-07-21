import { extractEssentialData } from "../dao/extractEssentialData.js";
import { scanPage } from "../services/scan.service.js";


const scanUrl = async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({
            error: "URL is required.",
            success: false
        });
    }

    try {
        const results = await scanPage(url);
        const extractedData = extractEssentialData(results);
        // console.log(extractedData);
        return res.status(200).json({
            success: true,
            url: url,
            timestamp: results.timestamp,
            summary: extractedData.summary,
            urgentIssues: extractedData.urgentViolations,
            topIssues: extractedData.topIssues,
            actionableItems: extractedData.actionableItems,

            // organise results
            detailedResults: {
                prioritizedViolations: extractedData.prioritizedViolations,
                violationsByType: extractedData.violationsByType
            },
            
            //Future plan
            // Optionally include full results (commented out to reduce response size)
            // fullResults: results
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: "Unable to scan this URL."
        });
    }
};

export default scanUrl;