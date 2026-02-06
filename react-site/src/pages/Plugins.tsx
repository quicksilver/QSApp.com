import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

interface Plugin {
  identifier: string;
  name: string;
  version: string;
  buildVersion: string;
  author: string;
  description: string;
  changes: string;
  modDate: string;
  modDateUnix: number;
  isNew: boolean;
  imageUrl: string;
  downloadUrl: string;
}

interface PluginInfo {
  bundleId: string;
  name: string;
  version: number;
  displayVersion: string;
  actions: Array<{
    name: string;
    description?: string;
    icon?: string;
  }>;
  pluginInfo: {
    author: string;
    categories: string[];
    description: string;
    extendedDescription?: string;
    icon?: string;
    relatedPaths?: string[];
  };
  pagination: {
    next: number | null;
    prev: number | null;
  };
}

export function Plugins() {
  const [plugins, setPlugins] = useState<Plugin[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedPlugin, setSelectedPlugin] = useState<Plugin | null>(null);
  const [pluginInfo, setPluginInfo] = useState<PluginInfo | null>(null);
  const [infoLoading, setInfoLoading] = useState(false);

  useEffect(() => {
    fetch("https://qs0.qsapp.com/api/plugins.php")
      .then((res) => res.json())
      .then((data) => {
        setPlugins(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const fetchPluginInfo = (plugin: Plugin, buildVersion?: string) => {
    setInfoLoading(true);
    const versionToFetch = buildVersion || plugin.buildVersion;
    
    fetch(`https://qs0.qsapp.com/api/plugin-info.php?version=${versionToFetch}&id=${plugin.identifier}`)
      .then((res) => res.json())
      .then((data) => {
        setPluginInfo(data);
        setInfoLoading(false);
      })
      .catch(() => {
        setInfoLoading(false);
      });
  };

  const handlePluginClick = (plugin: Plugin) => {
    setSelectedPlugin(plugin);
    fetchPluginInfo(plugin);
  };

  const handleVersionChange = (newVersion: number) => {
    if (selectedPlugin) {
      fetchPluginInfo(selectedPlugin, newVersion.toString());
    }
  };

  const filteredPlugins = plugins
    .filter((plugin) => {
      // Filter out plugins older than 2014
      const year = new Date(plugin.modDate).getFullYear();
      if (year < 2014) return false;

      // Search filter
      const searchLower = search.toLowerCase();
      return (
        plugin.name.toLowerCase().includes(searchLower) ||
        plugin.description?.toLowerCase().includes(searchLower) ||
        plugin.author?.toLowerCase().includes(searchLower)
      );
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="mx-auto max-w-[1200px] px-4 md:px-8 py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Plugin Repository
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Super-charge Quicksilver with plugins. Edit images, interact with
            Chrome, Mail, Microsoft Word and more, or change the look and feel
            with a new interface.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="max-w-sm flex-1">
            <Input
              placeholder="Search plugins..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-muted-foreground">
              {filteredPlugins.length} plugins
            </span>
            <a
              href="https://github.com/quicksilver/plugin_template"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Build your own!
            </a>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12 text-muted-foreground">
            Loading plugins...
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPlugins.map((plugin) => (
              <Card
                key={plugin.identifier}
                className="group hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handlePluginClick(plugin)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <img
                      src={
                        plugin.imageUrl.startsWith("/")
                          ? `https://qsapp.com${plugin.imageUrl}`
                          : plugin.imageUrl
                      }
                      alt={plugin.name}
                      className="w-10 h-10 rounded-lg"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://qsapp.com/images/plugins/default.png";
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-base truncate">
                          {plugin.name}
                        </CardTitle>
                        {plugin.isNew && (
                          <Badge variant="secondary" className="text-xs">
                            New
                          </Badge>
                        )}
                      </div>
                      {plugin.author && (
                        <p className="text-xs text-muted-foreground">
                          by {plugin.author}
                        </p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {plugin.description || "No description available."}
                  </p>
                  <p className="text-xs font-medium mt-3">
                    v{plugin.version} · Updated {plugin.modDate}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!loading && filteredPlugins.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No plugins found matching your search.
          </div>
        )}
      </div>

      <Dialog open={!!selectedPlugin} onOpenChange={() => {
        setSelectedPlugin(null);
        setPluginInfo(null);
      }}>
        <DialogContent className="sm:max-w-[1000px] max-h-[90vh] overflow-y-auto">
          {selectedPlugin && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={
                        selectedPlugin.imageUrl.startsWith("/")
                          ? `https://qsapp.com${selectedPlugin.imageUrl}`
                          : selectedPlugin.imageUrl
                      }
                      alt={selectedPlugin.name}
                      className="w-12 h-12 rounded-lg"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://qsapp.com/images/plugins/default.png";
                      }}
                    />
                    <div>
                      <DialogTitle>{selectedPlugin.name}</DialogTitle>
                      <DialogDescription>
                        {selectedPlugin.author && `by ${selectedPlugin.author}`}
                      </DialogDescription>
                    </div>
                  </div>
                  
                  {/* Pagination Controls */}
                  {pluginInfo && (
                    <div className="flex gap-2 mr-8">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleVersionChange(pluginInfo.pagination.prev!)}
                        disabled={infoLoading || pluginInfo.pagination.prev === null}
                        title={pluginInfo.pagination.prev === null ? "Already at earliest version" : "Previous version"}
                      >
                        <CaretLeftIcon size={18} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleVersionChange(pluginInfo.pagination.next!)}
                        disabled={infoLoading || pluginInfo.pagination.next === null}
                        title={pluginInfo.pagination.next === null ? "Already at latest version" : "Next version"}
                      >
                        <CaretRightIcon size={18} />
                      </Button>
                    </div>
                  )}
                </div>
              </DialogHeader>

              {pluginInfo ? (
                <div className="flex flex-col gap-6 relative">
                  {infoLoading && (
                    <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center rounded-lg z-50">
                      <p className="text-muted-foreground text-sm">Loading plugin info...</p>
                    </div>
                  )}
                  {/* Categories */}
                  {pluginInfo.pluginInfo.categories && pluginInfo.pluginInfo.categories.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold mb-2">Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        {pluginInfo.pluginInfo.categories.map((category) => (
                          <Badge key={category} variant="secondary">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Extended Description */}
                  {pluginInfo.pluginInfo.extendedDescription && (
                    <div>
                      <h3 className="text-sm font-semibold mb-2">Description</h3>
                      <div className="prose-content max-h-96 overflow-y-auto">
                        <div dangerouslySetInnerHTML={{ __html: pluginInfo.pluginInfo.extendedDescription }} />
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  {pluginInfo.actions && pluginInfo.actions.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold mb-2">Actions</h3>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {pluginInfo.actions.map((action, idx) => (
                          <div key={idx} className="border border-border rounded-lg p-3 bg-muted/50">
                            <p className="font-medium text-sm">{action.name}</p>
                            {action.description && (
                              <p className="text-xs text-muted-foreground mt-1">{action.description}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Related Paths */}
                  {pluginInfo.pluginInfo.relatedPaths && pluginInfo.pluginInfo.relatedPaths.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold mb-2">Related Paths</h3>
                      <div className="bg-muted rounded-lg p-3">
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {pluginInfo.pluginInfo.relatedPaths.map((path) => (
                            <li key={path} className="font-mono">{path}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Version Info */}
                  <p className="text-xs text-muted-foreground border-t pt-4">
                    Version {pluginInfo.displayVersion} · {selectedPlugin.modDate}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {selectedPlugin.description && (
                    <p className="text-sm text-muted-foreground">
                      {selectedPlugin.description}
                    </p>
                  )}
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Changelog</h4>
                    <div className="text-sm text-muted-foreground bg-muted rounded-lg p-4 max-h-48 overflow-y-auto">
                      {selectedPlugin.changes ? (
                        <div dangerouslySetInnerHTML={{ __html: selectedPlugin.changes }} />
                      ) : (
                        <p>No changelog available.</p>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Last updated: {selectedPlugin.modDate}
                  </p>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
