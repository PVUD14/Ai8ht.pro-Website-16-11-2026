import { Barcode, FileText, ScanLine, Search, TextSearch } from "lucide-react";
import styles from "./ScaanitPreview.module.css";

export type ScaanitPreviewKind = "barcode" | "product" | "label" | "ingredient";

const labels: Record<ScaanitPreviewKind, string> = {
  barcode: "Barcode scanner",
  product: "Product details",
  label: "Ingredient-label recognition",
  ingredient: "Ingredient information"
};

export function ScaanitPreview({ kind = "barcode", compact = false }: { kind?: ScaanitPreviewKind; compact?: boolean }) {
  return (
    <figure className={compact ? `${styles.preview} ${styles.compact}` : styles.preview}>
      <div className={styles.phone} role="img" aria-label={`Illustrative Scaanit ${labels[kind].toLowerCase()} screen; not a real application screenshot or product result.`}>
        <div className={styles.speaker} aria-hidden="true" />
        <div className={styles.screen} aria-hidden="true">
          <div className={styles.brand}><ScanLine size={19} /><strong>Scaanit</strong></div>
          <span className={styles.screenLabel}>{labels[kind]}</span>
          {kind === "barcode" && (
            <>
              <div className={styles.scanArea}><Barcode size={72} strokeWidth={1.2} /><span>Position a barcode here</span></div>
              <div className={styles.mockField}><Search size={16} /><span>Or enter a barcode</span></div>
              <div className={styles.screenNote}>Find available product information</div>
            </>
          )}
          {kind === "product" && (
            <>
              <div className={styles.emptyState}><FileText size={38} /><span>Product information</span><small>Available records appear here</small></div>
              {['Ingredients', 'Nutrition', 'Source details'].map(label => <div className={styles.mockRow} key={label}><span>{label}</span><span>—</span></div>)}
            </>
          )}
          {kind === "label" && (
            <>
              <div className={styles.scanArea}><TextSearch size={52} strokeWidth={1.3} /><span>Capture an English label</span></div>
              <div className={styles.mockField}><FileText size={16} /><span>Review recognized text</span></div>
              <div className={styles.screenNote}>Correct the text before ingredient matching</div>
            </>
          )}
          {kind === "ingredient" && (
            <>
              <div className={styles.emptyState}><Search size={38} /><span>Ingredient evidence</span><small>Information depends on approved data</small></div>
              {['Ingredient details', 'Evidence source', 'Review status'].map(label => <div className={styles.mockRow} key={label}><span>{label}</span><span>—</span></div>)}
            </>
          )}
          <div className={styles.previewLabel}>Illustrative Preview</div>
        </div>
      </div>
      <figcaption>Illustrative Preview <span>· {labels[kind]}</span></figcaption>
    </figure>
  );
}
