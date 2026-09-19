import { notFound } from "next/navigation";

import QRCodeGenerator from "../tools/QRCodeGenerator";
import PasswordGenerator from "../tools/PasswordGenerator";
import JsonFormatter from "../tools/JsonFormatter";
import Base64Encoder from "../tools/Base64Encoder";
import ColorPicker from "../tools/ColorPicker";
import HtmlFormatter from "../tools/HtmlFormatter";
import CssFormatter from "../tools/CssFormatter";
import JsFormatter from "../tools/JsFormatter";
import UUIDGenerator from "../tools/UUIDGenerator";
import HashGenerator from "../tools/HashGenerator";
import UrlEncoder from "../tools/UrlEncoder";
import TimestampConverter from "../tools/TimestampConverter";
import RegexTester from "../tools/RegexTester";
import MarkdownPreview from "../tools/MarkdownPreview";
import ImageCompressor from "../tools/ImageCompressor";

type Props = {
  params: Promise<{
    tool: string;
  }>;
};

export default async function ToolPage({ params }: Props) {
  const { tool } = await params;

  const tools: Record<string, React.ReactNode> = {
    "qr-generator": <QRCodeGenerator />,
    "password-generator": <PasswordGenerator />,
    "json-formatter": <JsonFormatter />,
    "base64-encoder": <Base64Encoder />,
    "color-picker": <ColorPicker />,
    "html-formatter": <HtmlFormatter />,
    "css-formatter": <CssFormatter />,
    "js-formatter": <JsFormatter />,
    "uuid-generator": <UUIDGenerator />,
    "hash-generator": <HashGenerator />,
    "url-encoder": <UrlEncoder />,
    "timestamp-converter": <TimestampConverter />,
    "regex-tester": <RegexTester />,
    "markdown-preview": <MarkdownPreview />,
    "image-compressor": <ImageCompressor />,
  };

  const selectedTool = tools[tool];

  if (!selectedTool) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      {selectedTool}
    </main>
  );
}